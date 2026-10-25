# Architecture and deployment portability

ListMail's application design is provider-independent in principle, but the current implementation is **not yet provider-independent**.

## Logical components

1. React/TypeScript user interface
2. Authenticated API with organization-scoped authorization
3. Persistent storage for organizations, contacts, memberships, approvals, announcements, and delivery records
4. Email sending and inbound delivery-event processing
5. Background scheduling for delivery-event reconciliation
6. Secrets management and audit logging

## Example independent deployment

- Frontend: static React/Vite build on a CDN or web host
- API: Node.js/TypeScript service or serverless functions
- Authentication: OIDC identity provider with server-side authorization
- Database: PostgreSQL or DynamoDB, with migrations and transactional uniqueness constraints
- Email: AWS SES or an equivalent provider, with verified domains and feedback events
- Workers: scheduled job runner or cloud scheduler
- Secrets: cloud secret manager with least-privilege access

## Required work before self-hosting

- Replace hosted-runtime client and server SDK integrations
- Move organization defaults, public URLs, email sender identities, and administrative bootstrap identities into configuration
- Implement and test database schema, access controls, and migration tooling
- Configure delivery-event signature verification and unsubscribe confirmation
- Validate rate limits, retries, duplicate prevention, and deployment health checks
- Document least-privilege IAM policies without exposing account-specific resources

No operational credentials, organization names, real domain names, or cloud account IDs are published here.
