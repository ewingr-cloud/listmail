import type { PublicAppConfig, ServerConfig } from './types';

const required = (name: string, value: string | undefined): string => {
  if (!value?.trim()) throw new Error('Missing required configuration: ' + name);
  return value.trim();
};

export function loadPublicConfig(env: Record<string,string|undefined>): PublicAppConfig {
  const organizations = JSON.parse(required('VITE_ORGANIZATIONS_JSON',env.VITE_ORGANIZATIONS_JSON));
  if (!Array.isArray(organizations) || !organizations.every(o =>
    typeof o.id === 'string' && typeof o.name === 'string' &&
    typeof o.slug === 'string' && typeof o.senderAlias === 'string'
  )) throw new Error('Invalid organization configuration');
  const publicBaseUrl = required('VITE_PUBLIC_BASE_URL',env.VITE_PUBLIC_BASE_URL);
  if (!/^https?:\/\//.test(publicBaseUrl)) throw new Error('Invalid public base URL');
  return {appName:env.VITE_APP_NAME || 'ListMail',publicBaseUrl,organizations};
}

export function loadServerConfig(env: Record<string,string|undefined>): ServerConfig {
  return {
    publicBaseUrl:required('PUBLIC_BASE_URL',env.PUBLIC_BASE_URL),
    awsRegion:env.AWS_REGION || 'us-east-1',
    senderDomain:required('SENDER_DOMAIN',env.SENDER_DOMAIN),
    sesEventTopicArn:env.SES_EVENT_TOPIC_ARN,
    adminBootstrapEmail:env.ADMIN_BOOTSTRAP_EMAIL,
    sesAccessKeyId:env.SES_ACCESS_KEY_ID,
    sesSecretAccessKey:env.SES_SECRET_ACCESS_KEY
  };
}
