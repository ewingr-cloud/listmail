# Security and publication rules

## Never commit

- Live API keys, AWS access keys, secret keys, session tokens, webhook secrets or private keys
- Cloud account IDs, live resource ARNs, tenant-specific email addresses or private domains
- Real organization/member records, contact lists, or operational event payloads
- Production environment files or backup exports

## Configuration boundaries

Only public, non-secret values may use Vite's `VITE_` prefix: these values are embedded in browser bundles. Server secrets must stay in the server runtime or a managed secret store. Organization identities and administrative bootstrap identities should be supplied by environment or tenant configuration, not source constants.

## Public source audit

Before publishing a ported module, scan for email addresses, URLs, 12-digit cloud account identifiers, ARN strings, token/key patterns, private names, and references to the original hosted deployment. Review the diff manually. Do not publish raw source snapshots or live configuration dumps.

## Deployment boundary

This repository is a generalized implementation effort. Do not use it to overwrite or migrate an existing live deployment without a separate compatibility review, backup, and test plan.
