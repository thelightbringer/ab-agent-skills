# am-agent-skills

[![npm version](https://img.shields.io/npm/v/am-agent-skills.svg)](https://www.npmjs.com/package/am-agent-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-11-blue.svg)](#skills)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Your AI team, on demand.**

Claude Code is a powerful engineer. But out of the box, it thinks like an engineer. These skills give it the voice of a product manager, the rigor of a QA engineer, the discipline of a Scrum Master, the strategic lens of a YC startup advisor, and eight more specialist roles — all invoked automatically from natural language.

No configuration. No context switching. Just type what you need.

---

## Skills

| Skill | Role | Trigger Phrases |
|---|---|---|
| `/office-hours` | YC-style startup advisor | "brainstorm this", "is this worth building", "office hours", "validate my idea" |
| `/brainstormer` | Design-before-code partner | "design this", "spec this out", "what's the approach", "help me design" |
| `/pm` | Product Manager | "write a PRD", "user stories", "roadmap", "prioritize features", "OKRs" |
| `/qa` | QA Engineer | "test plan", "test cases", "bug report", "coverage analysis", "QA review" |
| `/scrum-master` | Scrum Master | "sprint planning", "retrospective", "standup", "velocity", "impediment" |
| `/agile-coach` | Agile Coach | "agile coaching", "team assessment", "agile transformation", "anti-patterns" |
| `/kanban-coach` | Kanban Coach | "kanban board", "WIP limits", "cycle time", "throughput", "CFD" |
| `/tech-lead` | Technical Lead | "ADR", "architecture decision", "tech spec", "tech debt", "build vs buy" |
| `/ux-designer` | UX Designer | "UX review", "personas", "wireframe", "user journey", "accessibility" |
| `/devops-coach` | DevOps / SRE | "CI/CD", "SLO", "incident management", "runbook", "DORA metrics" |
| `/data-analyst` | Data Analyst | "KPIs", "A/B test", "funnel analysis", "dashboard", "cohort analysis" |

---

## Installation

### Option A: npm (recommended)

```bash
npm install -g am-agent-skills
```

The postinstall script automatically copies skills to `~/.claude/skills/am-agent-skills/`. Restart Claude Code to activate.

### Option B: Shell (no npm required)

```bash
curl -fsSL https://raw.githubusercontent.com/thelightbringer/am-agent-skills/main/install.sh | bash
```

### Option C: Manual install / update

```bash
am-agent-skills install    # or re-run after npm update
am-agent-skills update     # pull latest and reinstall
am-agent-skills list       # see all available skills
```

Skills are installed to: `~/.claude/skills/am-agent-skills/`

---

## Usage

Skills activate automatically when you use trigger phrases in Claude Code. You can also invoke them explicitly with `/skill-name`.

### office-hours — YC-style product advisor

```
"I have an idea for a SaaS that helps freelancers track invoices. Is this worth building?"
→ Runs a YC office hours session: demand reality, target user, narrowest wedge, moat.
   Produces: docs/office-hours/2025-01-15-invoice-tracker.md
```

### brainstormer — 9-step design partner

```
"Design the invoice creation flow for my app"
→ Explores codebase context, asks clarifying questions one at a time,
   proposes 2-3 approaches, writes a full spec with your approval.
   Produces: docs/specs/2025-01-15-invoice-creation-spec.md
```

### pm — Product Manager

```
"Write a PRD for the invoice reminder feature"
→ Produces a complete PRD: problem statement, user stories, requirements,
   success metrics, risks, and launch checklist.
   Produces: docs/product/prd-invoice-reminder-2025-01-15.md
```

### qa — QA Engineer

```
"Create a test plan for the invoice feature"
→ Reads your codebase, generates test plan, test cases covering happy path,
   edge cases, error states, and a risk matrix.
   Produces: docs/qa/test-plan-invoice-2025-01-15.md
```

### scrum-master — Scrum Master

```
"Help me run sprint planning for Sprint 12"
→ Walks through capacity, sprint goal, backlog commitment, risks.
   Produces: docs/sprints/sprint-12-planning.md
```

### agile-coach — Agile Coach

```
"Our retro actions never get done. What's wrong?"
→ Diagnoses the anti-pattern (retro theater), asks 9 maturity questions,
   produces a 90-day coaching plan.
```

### kanban-coach — Kanban Coach

```
"Design a kanban board for our 5-person team"
→ Asks about workflow stages, recommends WIP limits using Little's Law,
   produces board design with classes of service and cadences.
```

### tech-lead — Technical Lead

```
"Should we build our own auth system or use Auth0?"
→ Produces a structured build-vs-buy analysis with cost, risk, and a recommendation.
```

### ux-designer — UX Designer

```
"Review the onboarding flow for accessibility"
→ Runs Nielsen's 10 heuristics review + WCAG 2.1 AA checklist, produces
   prioritized findings with specific fixes.
```

### devops-coach — DevOps / SRE

```
"Design a CI/CD pipeline for our Node.js service on AWS"
→ Produces pipeline design: build, test, security scan, staging deploy,
   canary production deploy, with quality gates and DORA impact estimate.
```

### data-analyst — Data Analyst

```
"Design an A/B test for the new checkout button"
→ Produces complete experiment design: hypothesis, sample size, primary metric,
   guardrails, decision rules, and common pitfalls to avoid.
```

---

## Multi-Agent Flows

Skills are designed to hand off to each other. Common chains:

```
Product Idea
    └── /office-hours          ← validate demand and design doc
         └── /brainstormer     ← 9-step spec
              └── /pm          ← PRD + user stories
                   ├── /qa     ← test plan
                   ├── /ux-designer  ← wireframe spec
                   └── /scrum-master ← sprint planning

Technical Decision
    └── /tech-lead             ← ADR + tech spec
         ├── /qa               ← test strategy
         └── /devops-coach     ← deployment + SLO design

Team Health
    └── /agile-coach           ← maturity assessment
         ├── /scrum-master     ← ceremony improvements
         └── /kanban-coach     ← flow optimization

Metrics & Growth
    └── /data-analyst          ← KPI framework + A/B design
         ├── /pm               ← embed metrics in PRD
         └── /devops-coach     ← alerting + dashboards
```

---

## Works Across AI IDEs

### Claude Code (native)
Skills auto-invoke from trigger phrases. Use `/skill-name` for explicit invocation.

### Cursor
Paste a skill's content into a Cursor Rule (`.cursor/rules/[skill-name].mdc`):
1. Open a skill file: `~/.claude/skills/am-agent-skills/[skill]/SKILL.md`
2. Copy everything below the `---` frontmatter
3. Add to `.cursor/rules/[skill-name].mdc` with `alwaysApply: false`

### GitHub Copilot / Gemini CLI / Any AI Chat
Each skill's content is a standalone system prompt. Paste it into the system prompt or at the top of your conversation to activate the role.

---

## Why Curation Beats Volume

There are thousands of Claude prompts online. Most are vague, untested, and forget to enforce constraints. Every skill in this collection:

- **Has a hard gate** — skills that shouldn't write code, won't write code
- **Asks one question at a time** — no wall of questions that overwhelm
- **Produces structured artifacts** — every skill saves a document you can share and reference
- **Wires into a workflow** — each skill ends with a suggested next skill
- **Is < 500 lines** — the optimal size for Claude to hold as working context

---

## Philosophy

These skills are inspired by the best of the community — [gstack](https://github.com/garrytan/gstack) by Garry Tan (YC) and [superpowers](https://github.com/obra/superpowers) by Jesse Vincent — and enhanced with:

- Explicit artifact templates so output is consistent and professional
- Multi-agent handoff suggestions baked into every skill
- Hard behavioral constraints (no code until approved, one question per message)
- YAGNI discipline — specs stay lean

---

## Contributing

### Adding a New Skill

1. Fork this repo
2. Create `skills/your-skill-name/SKILL.md`
3. Use this frontmatter template:

```yaml
---
name: your-skill-name
description: >
  What this skill does. Include trigger phrases verbatim here so Claude
  auto-invokes it. Max 1024 characters.
when_to_use: >
  Additional trigger context and phrases.
context: fork
effort: high | medium | low
allowed-tools:
  - Read
  - Write
  - Bash
---
```

4. Keep SKILL.md under 500 lines
5. Include:
   - Role persona (who are you in this skill?)
   - Artifact templates with save paths
   - Hard rules section
   - Next steps / handoff suggestions
6. Test by copying to `~/.claude/skills/your-skill-name/` and trying trigger phrases
7. Open a PR with: what the skill does, trigger phrases, example output

### Good Skill Ideas for PRs
- `design-reviewer` — design critique with visual heuristics
- `security-reviewer` — OWASP-based security audit
- `legal-reviewer` — contract redline and risk flagging (with appropriate disclaimers)
- `hiring-coach` — job description writing, interview rubrics, hiring pipeline design
- `cto` — executive-level technical strategy and board communication

---

## Roadmap

- [ ] `design-reviewer` — visual design critique skill
- [ ] `security-reviewer` — OWASP + threat modeling
- [ ] `hiring-coach` — JD writing, interview kits, hiring rubrics
- [ ] `cto` — executive technical strategy
- [ ] Cursor rule generator CLI command: `am-agent-skills cursor-export`
- [ ] Auto-update via `am-agent-skills update`

---

## Author

Built by **Abhijit Misra** — curated for real product and engineering workflows.

---

## License

MIT — free to use, fork, and extend.
