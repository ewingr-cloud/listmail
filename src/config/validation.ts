import type { OrganizationConfig } from './types';
const aliasPattern = /^[a-z0-9](?:[a-z0-9._-]{0,62}[a-z0-9])?$/;
const idPattern = /^[a-z0-9][a-z0-9-]{0,62}$/;
export function validateOrganizations(input: OrganizationConfig[]): OrganizationConfig[] {
  if (!Array.isArray(input)) throw new Error('Organizations must be an array');
  const ids = new Set<string>(), slugs = new Set<string>(), aliases = new Set<string>();
  for (const org of input) {
    if (!org || !idPattern.test(org.id) || !idPattern.test(org.slug) ||
        !aliasPattern.test(org.senderAlias) || !org.name?.trim())
      throw new Error('Invalid organization configuration');
    if (ids.has(org.id) || slugs.has(org.slug) || aliases.has(org.senderAlias))
      throw new Error('Duplicate organization ID, slug, or sender alias');
    ids.add(org.id); slugs.add(org.slug); aliases.add(org.senderAlias);
  }
  return input;
}
export function senderAddress(alias:string, domain:string):string {
  if (!aliasPattern.test(alias) || !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain))
    throw new Error('Invalid sender identity');
  return alias+'@'+domain.toLowerCase();
}
