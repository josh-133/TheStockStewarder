# TheStockStewarder Constitution

## Purpose

This is a solo developer project. The goal is to ship a usable stock watchlist
dashboard, learn through building, and avoid the traps of overengineering,
scope creep, and perfectionism. This constitution exists to keep the project
grounded, moving, and honest.

---

## Core Principles

### I. MVP First, Always

Only build what the current milestone requires. Do not design for scale,
extensibility, or hypothetical future users until real users exist. If a
feature is not needed to complete the current milestone, it does not get built.
Working software delivered today beats a perfect system delivered never.

> Rule: If you cannot use it in the next demo or test session, cut it.

### II. Scope Is A Wall, Not A Suggestion

Feature creep is the primary risk on a solo project. Every time a new idea
surfaces mid-implementation, write it down and defer it. The backlog is not a
commitment — it is a parking lot. Advanced features, integrations, and
optimizations are deferred until the MVP is stable and in use.

> Rule: Finish the thing in front of you before starting something new.

### III. Simple Beats Clever

Prefer the simplest solution that solves the actual problem. Avoid abstractions
that exist in anticipation of complexity that has not arrived. Do not introduce
patterns, layers, or services that a single developer cannot hold in their head.
A flat structure you understand beats an elegant architecture you cannot debug.

> Rule: If you have to explain why the architecture is necessary, it probably is not.

### IV. Stack Is Fixed Until MVP Ships

The frontend is Angular. The backend is FastAPI with Python. These choices are
not up for debate mid-feature. Switching frameworks is not iteration — it is
restart disguised as progress. Resist the urge to rewrite or re-evaluate the
stack until the MVP is complete and validated.

> Rule: No stack changes until v1 ships.

### V. Iterate Small And Visibly

Break work into deliverables that produce visible output: a rendered component,
a working endpoint, a real data fetch. Prefer small commits over large batches.
Momentum is maintained by shipping things you can see and test frequently, not
by planning in detail before touching code.

> Rule: If a task takes more than a day, break it into smaller pieces.

### VI. Use AI As A Tool, Not A Crutch

AI-generated code must be read, understood, and owned before it is committed.
Do not accept code you cannot explain or debug. AI is a productivity multiplier
for a solo developer — use it to move faster, not to bypass understanding.
Prefer maintainable, readable output over clever generated complexity.

> Rule: If you could not have written it yourself with enough time, understand it before shipping it.

### VII. Build For Real Use, Not Hypothetical Users

Every feature must solve a real annoyance or answer a real question you
actually have about a stock. Do not build features because they seem like
good dashboard features. Usability and clarity matter more than feature count.
A dashboard with three things that work well beats one with ten things that
are confusing.

> Rule: Ask "would I actually use this?" before building it.

### VIII. Keep Infrastructure Cheap

Use free tiers. Do not pay for scaling infrastructure before users exist.
Hosting, databases, and integrations should cost nothing or near-nothing during
the MVP phase. Managed services are fine when they are free. Avoid any
architecture that incurs ongoing costs without a demonstrated need.

> Rule: If it costs money at zero users, find a free alternative.

### IX. Secrets Stay Server-Side

API keys, tokens, and credentials belong in environment variables on the
server. They do not get committed, rendered to the frontend, written to
browser storage, or embedded in test fixtures. This is non-negotiable even at
MVP scale — bad habits around secrets are permanent habits.

> Rule: No credentials in code, ever.

### X. Finish Before Expanding

A half-finished project with three features is worth more than a half-started
project with ten. Resist the urge to restart, refactor everything, or expand
scope before completing what is already in progress. The most important
momentum signal is a feature moving from "in progress" to "done."

> Rule: Done is better than planned. Shipped is better than started.

---

## Delivery Expectations

- A feature is not done until it can be used end-to-end in a browser.
- Tests are encouraged but should not block momentum on MVP features; basic
  smoke tests for core paths are sufficient at this stage.
- Performance budgets, accessibility audits, and advanced error handling are
  post-MVP concerns unless they block the core use case.
- Any deviation from the mandated stack or an exception to these principles
  must be written down with a reason and a clear end date.

---

## Governance

This constitution is a personal engineering policy for a solo project. It is
not bureaucracy — it is a forcing function against the natural tendency to
over-build, over-plan, and under-ship. Amendments are permitted at any time
with a written reason. The test of a good amendment is whether it helps you
ship the MVP faster or protects the project from a real risk.

**Version**: 1.0.0 | **Ratified**: 2026-05-14 | **Last Amended**: 2026-05-14
