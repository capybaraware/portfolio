---
description: Run a PR-style review of the current branch against main. Reviews all changes, fixes issues, and drafts a PR description.
---

# Branch Review Process

Run a full PR-style review of this branch against `main`.

## Step 0: Preparation

1. Run `git diff main...HEAD --stat` to see all changed files.
2. Run `git diff main...HEAD` for the full diff.
3. Run `git log main..HEAD --oneline` for commit history.

## Step 1: Review Loop

### Each round:

**Reviewer (fresh each round):**
- Spawn a fresh reviewer agent (`subagent_type: "reviewer"`).
- Provide the full diff, commit history, and instruction to review all changes as a cohesive unit.
- Also run `npm run lint` and report failures as critical issues.
- The reviewer identifies issues but does NOT make changes.

**Implementer (persistent across rounds):**
- If the reviewer finds Critical or Important issues, spawn an implementer to fix them.
- Use a Sonnet-model general-purpose agent (`subagent_type: "general-purpose"`, `model: "sonnet"`).
- The implementer makes changes but does NOT commit.

**Stopping criteria:**
- Zero Critical and zero Important issues, OR
- 5 review rounds completed.

## Step 2: Draft PR Description

Once review passes and lint is clean:

1. Review the full diff one final time.
2. Generate PR title (under 70 chars) and body:

```
## Summary
<3-5 bullet points>

## Test plan
<Checklist of how to verify changes>
```

3. Present the draft to the user. Do NOT create the PR.

## Rules

- Do NOT commit or push changes.
- Do NOT skip the review loop — run at least one round.
- Each reviewer must be a fresh agent.
- Report progress at each round.
