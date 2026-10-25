/** Public configuration contracts. Never put tenant identities or credentials in source. */
export interface OrganizationConfig {
  id: string;
  name: string;
  slug: string;
  senderAlias: string;
  subjectPrefix?: string;
}
export interface PublicAppConfig {
  appName: string;
  publicBaseUrl: string;
  organizations: OrganizationConfig[];
}
export interface ServerConfig {
  publicBaseUrl: string;
  awsRegion: string;
  senderDomain: string;
  sesEventTopicArn?: string;
  adminBootstrapEmail?: string;
  sesAccessKeyId?: string;
  sesSecretAccessKey?: string;
}
