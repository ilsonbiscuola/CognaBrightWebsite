# Marketing claims governance

Every material public capability or evidence statement must:

1. Have a stable `CB-MKT-###` identifier.
2. Appear in `data/marketing-claims.json`.
3. Use one status: `verified_now`, `in_development`, `planned_for_evaluation` or `not_claimed`.
4. Identify repository code or approved evidence and state its scope.
5. Be explicitly approved for publication.
6. Be tagged in page markup with `data-claim-id`.
7. Pass the automated claim and prohibited-pattern tests.

## Evidence review

Before changing a claim to `verified_now`, review:

- whether the capability works in the intended environment;
- whether the evidence supports the exact wording and audience;
- whether permissions exist for any name, logo, quotation or result;
- whether legal, privacy, clinical, research or security review is required;
- whether a roadmap, mock-up or database object is being mistaken for working end-to-end functionality;
- the review date and conditions that would make the evidence stale.

Completed research should be linked to an approved source and described within the design, population and limitations of that research. Preliminary work must not be presented as an established outcome.
