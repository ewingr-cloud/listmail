# Existing-feature rebuild checklist

**Status: in progress.** This is a porting and verification checklist, not a claim of feature parity.

| Capability | Existing hosted version | Portable implementation |
| --- | --- | --- |
| React screens and navigation | Present | Not yet migrated |
| Multiple organizations | Present | Configuration contract started |
| Membership enrollment and verification | Present | Not yet migrated |
| Administrator invitations and access control | Present | Not yet migrated |
| Announcement review and approval | Present | Not yet migrated |
| Individualized sending and unsubscribe | Present | Not yet migrated |
| Delivery status and event processing | Present | Not yet migrated |
| Database persistence and transactions | Hosted-runtime SDK | Interface defined; adapter pending |
| Authentication | Hosted-runtime SDK | Interface defined; adapter pending |
| Background scheduling | Hosted-runtime SDK | Interface defined; adapter pending |
| Email transport | AWS SES in hosted version | Interface defined; adapter pending |

## Acceptance criteria

1. No hardcoded deployment domain, organization name, administrator identity, account number, or credential in portable source.
2. Domain and sender identities are configurable without source changes.
3. All privileged credentials remain server-side; public browser configuration contains no secrets.
4. Tests cover organization isolation, administrator authorization, verification, announcement approval, unsubscribe, and duplicate delivery prevention.
5. A clean install can be configured using documented example values.
6. Existing hosted deployment remains unchanged until feature-parity and migration testing pass.

## Current limitation

The existing application still depends on its original hosting SDK. The generalized source is not yet feature-complete or deployable.
