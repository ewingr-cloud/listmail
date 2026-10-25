/** Deployment-specific URLs are derived from a validated base URL. */
export function makeAppUrls(baseUrl: string) {
  const base = new URL(baseUrl);
  if (!['https:', 'http:'].includes(base.protocol) || base.username || base.password || base.search || base.hash)
    throw new Error('Invalid application base URL');
  const root = base.href.endsWith('/') ? base.href : base.href + '/';
  const link = (path: string, params?: Record<string,string>) => {
    const url = new URL(path.replace(/^\//,''),root);
    for (const [key,value] of Object.entries(params || {})) url.searchParams.set(key,value);
    return url.toString();
  };
  return {
    verification: (token:string) => link('/',{verify:token}),
    unsubscribe: (token:string) => link('/',{unsubscribe:token}),
    approval: (token:string) => link('/',{approval:token}),
    signup: (organizationSlug:string) => link('join/'+encodeURIComponent(organizationSlug)),
    api: (path:string) => link('api/'+path.replace(/^\//,''))
  };
}
