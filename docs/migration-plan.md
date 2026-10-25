# Sanitization and portability migration

The original hosted application remains the operational system during this work.

## Phase 1 — Public foundation (started)

- Public configuration contracts and example values
- Host-independent identity, storage, email, secrets, and scheduler interfaces
- Security publication policy

## Phase 2 — Extract and sanitize application logic

- Replace hardcoded tenant lists, administrator identities, sender addresses, and URLs with configuration
- Isolate authorization, enrollment, approval, delivery, and unsubscribe logic from hosting APIs
- Add configuration validation and multi-tenant isolation tests
- Review every file for sensitive values before committing

## Phase 3 — Standalone runtime

- Implement a Node API and selected persistent store
- Provide authentication, migrations, secure secrets, email transport, and scheduler adapters
- Add reproducible local development and integration tests

## Phase 4 — Operational cutover (separate approval)

- Validate data migration, security, mail delivery, and rollback
- Establish CI checks and a release process
- Keep the existing live deployment unchanged until explicit cutover approval

**Current state:** These contracts are scaffolding; they are not wired into the original application and do not constitute a deployable standalone build.
