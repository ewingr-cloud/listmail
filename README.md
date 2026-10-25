# ListMail

**Multi-organization email announcements and membership management for clubs, schools, associations, and businesses.**

ListMail is intended for organizations that need member enrollment, email verification, organization-specific administration, approval-based announcements, unsubscribe controls, and delivery auditing.

## Project status

**Source publication in progress.** The existing application is being reviewed and separated from its original hosted runtime before application code is published. This repository does not yet contain a deployable standalone application. Do not assume that cloning this repository will start a working service.

## Design goals

- Organization-scoped membership and administrator permissions
- Verified and consent-based email enrollment
- Review and approval before sending announcements
- Email delivery, bounce/complaint processing, and unsubscribe support
- Auditable administrative actions
- Deployment flexibility and replaceable infrastructure components

## Deployment and portability

The frontend uses React and TypeScript. The existing backend uses a hosted runtime's database, authentication, secrets, routing, and scheduling APIs. Those are **not** automatically portable: a standalone deployment requires compatible replacements and integration testing.

A possible self-hosted architecture uses a React frontend, Node.js API, managed identity provider, PostgreSQL or DynamoDB, an email delivery service, a scheduled worker, and secure secret storage. This is a reference architecture, **not** a completed or verified deployment.

No live organization configuration, real subscriber data, credentials, infrastructure account identifiers, or operational endpoints belong in this repository.

## License

Source-available under the [PolyForm Perimeter License 1.0.0](LICENSE). Organizations may use and customize the software for their own operations. Consultants may provide deployment and support services. Using the software to offer a competing product is not permitted under the license. The license text controls.

## Security

Do not commit secrets, production environment files, subscriber records, access tokens, private keys, or cloud account identifiers. Report vulnerabilities privately to the repository owner rather than opening a public issue containing exploit details.
