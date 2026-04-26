import { useState } from “react”;

// ─── CURATED ESSENTIALS (opinionated, not exhaustive) ────────────────────────
const STACK = [
{
id: “gstack”,
name: “garrytan/gstack”,
label: “gstack”,
color: “#8B5CF6”,
stars: “66k+”,
install: “git clone https://github.com/garrytan/gstack ~/.claude/skills/gstack”,
why: “Your virtual engineering team. CEO/Designer/Eng Manager/QA/Security roles as slash commands.”,
url: “https://github.com/garrytan/gstack”,
},
{
id: “osmani”,
name: “addyosmani/agent-skills”,
label: “agent-skills”,
color: “#10B981”,
stars: “—”,
install: “npx ai-devkit skill add addyosmani/agent-skills”,
why: “Google engineering discipline: spec-first, TDD, Hyrum’s Law, Beyoncé Rule. Non-negotiable verification gates.”,
url: “https://github.com/addyosmani/agent-skills”,
},
{
id: “superpowers”,
name: “obra/superpowers”,
label: “superpowers”,
color: “#F97316”,
stars: “148k+”,
install: “/plugin marketplace add obra/superpowers”,
why: “Most-used skills library. brainstorm→spec→plan→TDD→review→merge pipeline.”,
url: “https://github.com/obra/superpowers”,
},
{
id: “anthropic”,
name: “anthropics/skills”,
label: “official skills”,
color: “#F59E0B”,
stars: “37.5k+”,
install: “/plugin marketplace add anthropic-agent-skills”,
why: “Anthropic-built: docx, pdf, pptx, xlsx, mcp-builder, skill-creator. Stable & versioned.”,
url: “https://github.com/anthropics/skills”,
},
{
id: “repomix”,
name: “yamadashy/repomix”,
label: “repomix”,
color: “#06B6D4”,
stars: “20.9k+”,
install: “npx repomix”,
why: “Pack your entire codebase into one AI-readable file. Essential before any large refactor or migration.”,
url: “https://github.com/yamadashy/repomix”,
},
{
id: “github-mcp”,
name: “github/github-mcp-server”,
label: “github MCP”,
color: “#EC4899”,
stars: “—”,
install: “claude mcp add github – github-mcp-server”,
why: “Gives Claude direct access to PRs, issues, CI/CD. Most-used MCP in the ecosystem.”,
url: “https://github.com/github/github-mcp-server”,
},
{
id: “context7”,
name: “upstash/context7”,
label: “context7 MCP”,
color: “#84cc16”,
stars: “—”,
install: “claude mcp add context7 – context7-mcp”,
why: “Real-time version-specific library docs in every prompt. No more stale training data for library APIs.”,
url: “https://github.com/upstash/context7”,
},
{
id: “tddguard”,
name: “nizos/tdd-guard”,
label: “tdd-guard”,
color: “#EF4444”,
stars: “1.7k+”,
install: “git clone https://github.com/nizos/tdd-guard”,
why: “Hook that automatically blocks Claude from skipping tests. Enforces TDD without you having to ask.”,
url: “https://github.com/nizos/tdd-guard”,
},
{
id: “claude-squad”,
name: “smtg-ai/claude-squad”,
label: “claude-squad”,
color: “#A78BFA”,
stars: “5.6k+”,
install: “npm install -g claude-squad”,
why: “Terminal multiplexer for parallel Claude sessions. Run agents for different features simultaneously.”,
url: “https://github.com/smtg-ai/claude-squad”,
},
{
id: “wshobson-agents”,
name: “wshobson/agents”,
label: “wshobson/agents”,
color: “#64748b”,
stars: “25k+”,
install: “git clone https://github.com/wshobson/agents .claude/agents”,
why: “Production subagents for every role: strategy, dev, security, design, data, research. Drop-in specialists.”,
url: “https://github.com/wshobson/agents”,
},
];

// ─── SCENARIOS ────────────────────────────────────────────────────────────────
const SCENARIOS = [
{
id: “quick-start”,
emoji: “🚀”,
label: “Quick Start”,
subtitle: “Install order matters”,
color: “#F97316”,
sections: [
{
title: “Install in this order (15 min total)”,
type: “steps”,
items: [
{ n: 1, title: “Claude Code CLI”, cmd: “npm install -g @anthropic-ai/claude-code”, note: “The foundation. Everything else runs on top of this.” },
{ n: 2, title: “gstack”, cmd: “git clone https://github.com/garrytan/gstack ~/.claude/skills/gstack”, note: “Your virtual team. Do this before anything else.” },
{ n: 3, title: “agent-skills”, cmd: “npx ai-devkit skill add addyosmani/agent-skills”, note: “Engineering discipline. Prevents Claude from cutting corners.” },
{ n: 4, title: “superpowers”, cmd: “# Inside Claude Code:\n/plugin marketplace add obra/superpowers”, note: “TDD→review→merge pipeline.” },
{ n: 5, title: “official skills”, cmd: “# Inside Claude Code:\n/plugin marketplace add anthropic-agent-skills”, note: “Documents, MCP builder, skill creator.” },
{ n: 6, title: “repomix”, cmd: “npm install -g repomix”, note: “Run before any large session: npx repomix → paste output as context.” },
{ n: 7, title: “github MCP”, cmd: “claude mcp add github – github-mcp-server”, note: “PRs, issues, CI/CD directly in Claude.” },
{ n: 8, title: “context7 MCP”, cmd: “claude mcp add context7 – context7-mcp”, note: “Library docs are now always current in Claude’s context.” },
{ n: 9, title: “tdd-guard hook”, cmd: “# In your project’s CLAUDE.md:\nhooks:\n  PreToolUse: [tdd-guard check]”, note: “Automated TDD enforcement. Set it and forget it.” },
],
},
{
title: “What to skip (why most lists are overengineered)”,
type: “warning”,
items: [
“Memory systems (claude-mem, gbrain) — start without them. Add only if session continuity is actually a bottleneck.”,
“Multiple orchestration tools — claude-squad is enough. Don’t also add Claude-Flow + claude-flow + ccpm.”,
“100+ subagent collections — wshobson/agents covers 95% of cases. Don’t install 5 different agent repos.”,
“Every MCP server listed — github + context7 + postgres (if you use it) is the right starting set.”,
“Awesome list repos — bookmark VoltAgent/awesome-agent-skills. Don’t clone it.”,
],
},
],
},

{
id: “designing”,
emoji: “🎨”,
label: “Designing”,
subtitle: “System, API, UI/UX, architecture”,
color: “#8B5CF6”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “/office-hours”, tool: “gstack”, desc: “Start here. 6 forcing questions that challenge your design premise before you commit to anything. Writes a design doc.” },
{ cmd: “/autoplan”, tool: “gstack”, desc: “Chains CEO review → design review → eng review. Surfaces only the decisions that need your taste, not your time.” },
{ cmd: “/plan-eng-review”, tool: “gstack”, desc: “Engineering manager mode. Architecture, diagrams, test plan. Forces LLM diagrams — they get more complete when visualized.” },
{ cmd: “/design-consultation”, tool: “gstack”, desc: “Build a complete design system from scratch with creative risks and realistic product mockups.” },
{ cmd: “api-design skill”, tool: “osmani”, desc: “Hyrum’s Law enforced. Contract-first. Backward compatibility built in. Use for any public-facing API.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “System design session”, steps: “1. Run /office-hours with your problem statement\n2. Claude will challenge your assumptions and produce a design doc\n3. Run /plan-eng-review on that doc\n4. Human reviews the architecture before any code” },
{ scenario: “API design”, steps: “1. Load api-design skill: ‘use the api-design skill’\n2. Describe your API intent\n3. Claude enforces: contract-first, versioning, backward compat\n4. Spec committed before implementation begins” },
{ scenario: “UI/UX design”, steps: “1. /design-consultation for the full design system\n2. /plan-design-review on any existing screens\n3. /design-review after implementation (atomic commits + before/after screenshots)” },
],
},
],
},

{
id: “migrating”,
emoji: “🔀”,
label: “Migrating”,
subtitle: “DB, framework, language, architecture”,
color: “#06B6D4”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “npx repomix”, tool: “repomix”, desc: “FIRST: pack the codebase. Paste output as context. Claude now has the full picture before touching anything.” },
{ cmd: “spec-driven-development”, tool: “osmani”, desc: “Write the migration spec before a single line changes. 4 phases: SPECIFY → PLAN → TASKS → IMPLEMENT. No skipping.” },
{ cmd: “/plan-eng-review”, tool: “gstack”, desc: “Have the eng manager review the migration plan. Catch architecture problems before you’re 3 days in.” },
{ cmd: “incremental-implementation”, tool: “osmani”, desc: “One task at a time. Verify before next. Migrations that go big-bang almost always fail.” },
{ cmd: “/review”, tool: “gstack”, desc: “Staff-level adversarial review on each migration PR. Finds edge cases, silent data corruption paths.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “Database migration”, steps: “1. repomix → give Claude full context\n2. ‘Use the spec-driven-development skill. We’re migrating from Mongo to Postgres’\n3. Spec phase: schema mapping, data transformation plan\n4. Task phase: atomic steps with rollback strategy\n5. /review on each migration script PR” },
{ scenario: “Framework migration (e.g. Vue → React)”, steps: “1. repomix the old codebase\n2. spec-driven: write what ‘done’ looks like (component parity, test coverage)\n3. /plan-eng-review to validate approach\n4. claude-squad: spawn parallel agents per module\n5. incremental-implementation: one component at a time” },
{ scenario: “Language migration”, steps: “1. repomix entire repo\n2. spec-driven: define type mappings, interface contracts\n3. api-design skill for public interfaces\n4. tdd-guard: tests first in new language before porting logic” },
],
},
],
},

{
id: “new-feature”,
emoji: “✨”,
label: “New Feature”,
subtitle: “Implementation with discipline”,
color: “#10B981”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “spec-driven-development”, tool: “osmani”, desc: “Non-trivial features need a spec. SPECIFY → PLAN → TASKS → IMPLEMENT. Human reviews each gate. ‘Code without a spec is guessing.’” },
{ cmd: “/write-plan”, tool: “superpowers”, desc: “Create a structured implementation plan from the spec. Breaks it into verifiable tasks.” },
{ cmd: “test-driven-development”, tool: “osmani”, desc: “RED → GREEN → REFACTOR enforced. Beyoncé Rule: if you liked it, put a test on it. tdd-guard backs this up.” },
{ cmd: “/execute-plan”, tool: “superpowers”, desc: “Execute plan in batches. Each batch verified before the next starts.” },
{ cmd: “/ship”, tool: “gstack”, desc: “Bootstraps test framework if missing, enforces coverage audit, creates PR. One command from ‘done’ to ‘in review’.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “Non-trivial feature (>1 day of work)”, steps: “1. ‘Use spec-driven-development. Feature: [description]’\n2. Claude asks clarifying questions until requirements are concrete\n3. Spec written: what, why, acceptance criteria\n4. PLAN phase: human reviews before implementation\n5. TASKS phase: atomic checklist\n6. IMPLEMENT one task at a time with TDD\n7. /ship when done” },
{ scenario: “Simple feature (<4 hours)”, steps: “1. ‘Use incremental-implementation’\n2. State the feature and acceptance criteria\n3. Claude implements one step, verifies, next step\n4. tdd-guard blocks any shortcuts on tests” },
{ scenario: “Feature behind a flag”, steps: “1. spec-driven includes flag design in SPECIFY phase\n2. /plan-eng-review validates flag strategy\n3. Implementation always behind flag\n4. /ship creates PR with flag config documented” },
],
},
],
},

{
id: “exploration”,
emoji: “🔭”,
label: “Exploration / Spike”,
subtitle: “Research, POC, tech evaluation”,
color: “#84cc16”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “/office-hours”, tool: “gstack”, desc: “Frame the exploration. What question are you trying to answer? Claude challenges your framing and surfaces alternatives.” },
{ cmd: “/brainstorm”, tool: “superpowers”, desc: “Interactive design refinement. Generates alternatives before you commit to an approach.” },
{ cmd: “context7 MCP”, tool: “context7”, desc: “Get current docs for any library you’re evaluating. No stale training data misleading your spike.” },
{ cmd: “/investigate”, tool: “gstack”, desc: “Systematic root-cause investigation for unknowns. Traces data flow, tests hypotheses. No conclusions without evidence.” },
{ cmd: “planning-and-task-breakdown”, tool: “osmani”, desc: “When spike is done: formalize findings into atomic, verifiable tasks for the actual implementation.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “Tech evaluation (e.g. should we use X?)”, steps: “1. /office-hours: ‘We’re evaluating X vs Y for [problem]’\n2. Claude challenges assumptions, asks forcing questions\n3. /brainstorm: generates evaluation criteria\n4. context7: live docs for both options\n5. Output: decision doc with tradeoffs committed to repo” },
{ scenario: “POC / spike”, steps: “1. /office-hours to frame the spike\n2. Build the POC without spec-driven (it’s throwaway)\n3. /investigate any unknowns that block you\n4. Document findings → planning-and-task-breakdown for real implementation” },
],
},
],
},

{
id: “quality”,
emoji: “🔍”,
label: “Quality Analysis”,
subtitle: “Code review, testing, security, debt”,
color: “#EF4444”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “/review”, tool: “gstack”, desc: “Staff engineer adversarial code review + Codex second opinion. Finds bugs that pass CI and blow up in production. Race conditions, resource leaks, silent data corruption.” },
{ cmd: “/cso”, tool: “gstack”, desc: “Chief Security Officer mode. OWASP Top 10 + STRIDE threat model. Zero false-positive exclusions.” },
{ cmd: “test-driven-development”, tool: “osmani”, desc: “If coverage is low, use TDD skill to backfill. Tests are evidence requirements, not suggestions.” },
{ cmd: “code-review-and-quality”, tool: “osmani”, desc: “Systematic review with change size norms, what to look for at each diff size, review speed targets.” },
{ cmd: “simplification”, tool: “osmani”, desc: “Chesterton’s Fence: don’t remove what you don’t understand. Structured simplification with evidence gates.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “Pre-merge code review”, steps: “1. /review on the branch diff\n2. Claude runs: structured review + adversarial Codex check\n3. Output: P1 blockers / P2 suggestions / P3 nits\n4. Fix P1s before merge” },
{ scenario: “Security audit”, steps: “1. /cso\n2. Claude runs OWASP Top 10 scan + STRIDE threat model\n3. Output: findings with severity + remediation\n4. Fix critical before deploy” },
{ scenario: “Technical debt audit”, steps: “1. repomix the codebase\n2. ‘Use the simplification skill on this codebase’\n3. Claude identifies: dead code, complexity hotspots, Chesterton violations\n4. Prioritized debt backlog created” },
{ scenario: “Test coverage gap”, steps: “1. ‘Use test-driven-development skill’\n2. Identify the undertested module\n3. RED phase: write failing tests for existing behavior\n4. tdd-guard ensures no new code without tests” },
],
},
],
},

{
id: “product”,
emoji: “📋”,
label: “Product Managing”,
subtitle: “PRDs, specs, roadmaps, stakeholders”,
color: “#F59E0B”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “/office-hours”, tool: “gstack”, desc: “Product thinking mode. Frames the real product vs the feature request. ‘What problem are users actually having?’” },
{ cmd: “spec-driven-development”, tool: “osmani”, desc: “PRDs as specs. Forces: what are we building, why, and how will we know it’s done. Acceptance criteria are non-negotiable.” },
{ cmd: “/autoplan”, tool: “gstack”, desc: “Full review pipeline: CEO review → design → eng. Surfaces scope issues, design problems, engineering risks before sprint starts.” },
{ cmd: “anthropics/skills (docx)”, tool: “official”, desc: “Produce PRDs, one-pagers, stakeholder docs as professional Word files. Direct download.” },
{ cmd: “internal-comms skill”, tool: “official”, desc: “Status reports, newsletters, 3P updates, project FAQs — all with consistent format and tone.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “Writing a PRD”, steps: “1. /office-hours: describe the product problem\n2. Claude challenges: ‘Is this the right thing to build?’\n3. ‘Use spec-driven-development to write a PRD for [feature]’\n4. SPECIFY phase = PRD: problem, solution, acceptance criteria\n5. Output as .docx with anthropic docx skill” },
{ scenario: “Stakeholder update”, steps: “1. ‘Use the internal-comms skill’\n2. Paste current sprint status / blockers\n3. Claude formats: executive summary, progress, risks, asks\n4. Download as .docx or copy to email” },
{ scenario: “Roadmap prioritization”, steps: “1. /office-hours with list of candidate features\n2. Claude applies: user pain, strategic fit, engineering effort\n3. Output: prioritized backlog with rationale\n4. Export as .docx for stakeholder review” },
],
},
],
},

{
id: “scrum”,
emoji: “🔄”,
label: “Scrum / Ceremonies”,
subtitle: “Sprints, standups, retros, planning”,
color: “#A78BFA”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “planning-and-task-breakdown”, tool: “osmani”, desc: “Sprint planning: slice features into atomic, verifiable tasks. Each task has clear acceptance criteria.” },
{ cmd: “/write-plan”, tool: “superpowers”, desc: “Produce a structured sprint plan from a set of stories. Ordered by dependency, sized by complexity.” },
{ cmd: “internal-comms skill”, tool: “official”, desc: “Sprint review writeups, retrospective notes, velocity reports — formatted consistently.” },
{ cmd: “anthropics/skills (docx)”, tool: “official”, desc: “Meeting notes, sprint reports, ceremony docs as downloadable Word files.” },
{ cmd: “/autoplan”, tool: “gstack”, desc: “Pre-sprint: run the full review pipeline on planned stories before committing the team.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “Sprint planning”, steps: “1. Paste the epic/stories into Claude Code\n2. ‘Use planning-and-task-breakdown’\n3. Claude slices into atomic tasks with acceptance criteria\n4. /autoplan on the plan: CEO/design/eng review\n5. Adjust based on feedback before committing” },
{ scenario: “Retrospective”, steps: “1. Collect team inputs: what went well, what didn’t, actions\n2. ‘Use the internal-comms skill to format a retro report’\n3. Claude structures: highlights, blockers, action items with owners\n4. Export as .docx or paste into your retro tool” },
{ scenario: “Daily standup format”, steps: “1. ‘Summarize yesterday’s work from these commits: [paste git log]’\n2. Claude generates: done, today, blockers — per person\n3. Use as standup template each morning” },
],
},
],
},

{
id: “team-work”,
emoji: “👥”,
label: “Dividing Team Work”,
subtitle: “Task assignment, parallel execution, dependencies”,
color: “#EC4899”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “planning-and-task-breakdown”, tool: “osmani”, desc: “Break features into parallel-safe atomic tasks. Identify dependencies so parallel work doesn’t block.” },
{ cmd: “claude-squad”, tool: “claude-squad”, desc: “Spawn parallel Claude sessions per task stream. Each engineer’s context isolated. No cross-contamination.” },
{ cmd: “wshobson/agents”, tool: “wshobson”, desc: “Domain subagents per team specialty: backend, frontend, data, security. Each has expert-level knowledge in their domain.” },
{ cmd: “/review”, tool: “gstack”, desc: “Each parallel stream’s PR gets adversarial review before merge. Catches integration issues early.” },
{ cmd: “anthropics/skills (docx)”, tool: “official”, desc: “Task assignment docs, ownership matrices, dependency charts — as exportable files.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “Splitting a feature across team members”, steps: “1. ‘Use planning-and-task-breakdown. Feature: [X]. Team: [FE, BE, infra]’\n2. Claude identifies dependency graph\n3. Output: parallel tracks with blocking order\n4. Each track = one claude-squad session per engineer\n5. /review on each track’s PR before integration” },
{ scenario: “Running parallel agent sessions”, steps: “1. claude-squad: open N sessions\n2. Each session gets: repomix context + its specific task\n3. Sessions run independently (no shared context = no confusion)\n4. Merge via /review + /ship per session” },
],
},
],
},

{
id: “team-mgmt”,
emoji: “🏗️”,
label: “Managing a Team”,
subtitle: “Code standards, onboarding, culture, reviews”,
color: “#64748b”,
sections: [
{
title: “Workflow”,
type: “workflow”,
steps: [
{ cmd: “anthropics/claude-code-action”, tool: “official”, desc: “Drop-in GitHub Action: @claude mentions in PRs trigger review. Team gets AI-assisted review on every PR automatically.” },
{ cmd: “anthropics/claude-code-security-review”, tool: “official”, desc: “CI/CD Action: analyzes PR diffs for security vulnerabilities. Runs on every push. 2.8k stars.” },
{ cmd: “/review (gstack)”, tool: “gstack”, desc: “Staff-level review for complex PRs. Run before human reviewers to reduce their cognitive load.” },
{ cmd: “code-review-and-quality”, tool: “osmani”, desc: “Codify your team’s review standards. Teach Claude your conventions once — consistent across all PRs.” },
{ cmd: “CLAUDE.md in repo root”, tool: “native”, desc: “Team-wide instructions for Claude. Coding standards, naming conventions, tech stack — every session auto-loaded.” },
],
},
{
title: “How to use it”,
type: “howto”,
items: [
{ scenario: “Onboarding new engineers”, steps: “1. repomix the codebase → let Claude explain the architecture\n2. graphify (optional): interactive knowledge graph for exploration\n3. CLAUDE.md: document conventions Claude will enforce\n4. ‘Ask Claude Code to explain [any module]’ — instant context” },
{ scenario: “Codifying team standards”, steps: “1. Write CLAUDE.md in repo root with your team’s rules\n2. Load code-review-and-quality skill and customize it\n3. Every team member’s Claude session auto-loads these standards\n4. /review enforces them on every PR” },
{ scenario: “PR review at scale”, steps: “1. Install anthropics/claude-code-action in your GitHub repo\n2. Team members @claude in any PR comment\n3. Claude reviews the diff, suggests fixes, follows your conventions\n4. Reduces human reviewer burden by 60-80% on routine PRs” },
{ scenario: “Technical decisions / ADRs”, steps: “1. /office-hours: present the decision problem\n2. Claude generates: options, tradeoffs, recommendation\n3. Export as .docx ADR for team review\n4. Decision committed to docs/ alongside code” },
],
},
],
},

{
id: “essentials”,
emoji: “📦”,
label: “Essentials Reference”,
subtitle: “The curated stack, nothing more”,
color: “#334155”,
sections: [],
},
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function CheatSheet() {
const [active, setActive] = useState(“quick-start”);
const scenario = SCENARIOS.find((s) => s.id === active);

const renderSection = (sec, idx) => {
if (sec.type === “steps”) {
return (
<div key={idx} style={{ marginBottom: 24 }}>
<SectionTitle title={sec.title} color={scenario.color} />
<div style={{ display: “flex”, flexDirection: “column”, gap: 8 }}>
{sec.items.map((item) => (
<div key={item.n} style={{ display: “grid”, gridTemplateColumns: “28px 1fr”, gap: 14, background: “#0a0e1a”, borderRadius: 8, padding: 14, border: “1px solid #1a2035” }}>
<div style={{ width: 26, height: 26, borderRadius: “50%”, background: `${scenario.color}20`, border: `1px solid ${scenario.color}60`, display: “flex”, alignItems: “center”, justifyContent: “center”, color: scenario.color, fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{item.n}</div>
<div>
<div style={{ color: “#f1f5f9”, fontWeight: 600, fontSize: 13, marginBottom: 6, fontFamily: “‘IBM Plex Sans’, sans-serif” }}>{item.title}</div>
<pre style={{ background: “#050810”, color: “#7dd3fc”, padding: “8px 12px”, borderRadius: 6, fontSize: 11, marginBottom: 6, border: “1px solid #1a2035”, fontFamily: “monospace” }}>{item.cmd}</pre>
<div style={{ color: “#64748b”, fontSize: 12, lineHeight: 1.5 }}>{item.note}</div>
</div>
</div>
))}
</div>
</div>
);
}

```
if (sec.type === "warning") {
  return (
    <div key={idx} style={{ marginBottom: 24 }}>
      <SectionTitle title={sec.title} color="#EF4444" />
      <div style={{ background: "#0a0e1a", borderRadius: 8, padding: 14, border: "1px solid #2a1515" }}>
        {sec.items.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: i < sec.items.length - 1 ? "1px solid #1a2035" : "none" }}>
            <span style={{ color: "#EF4444", fontSize: 12, flexShrink: 0, marginTop: 1 }}>✕</span>
            <span style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

if (sec.type === "workflow") {
  return (
    <div key={idx} style={{ marginBottom: 24 }}>
      <SectionTitle title={sec.title} color={scenario.color} />
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {sec.steps.map((step, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 80px 1fr", gap: 12, background: "#0a0e1a", borderRadius: 8, padding: "11px 14px", border: "1px solid #1a2035", alignItems: "start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${scenario.color}25`, border: `1px solid ${scenario.color}50`, display: "flex", alignItems: "center", justifyContent: "center", color: scenario.color, fontSize: 9, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
              <code style={{ color: scenario.color, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>{step.cmd}</code>
            </div>
            <span style={{ color: "#334155", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, paddingTop: 2 }}>{step.tool}</span>
            <span style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.5 }}>{step.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

if (sec.type === "howto") {
  return (
    <div key={idx} style={{ marginBottom: 24 }}>
      <SectionTitle title={sec.title} color={scenario.color} />
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {sec.items.map((item, i) => (
          <div key={i} style={{ background: "#0a0e1a", borderRadius: 8, border: "1px solid #1a2035", overflow: "hidden" }}>
            <div style={{ background: `${scenario.color}12`, padding: "9px 14px", borderBottom: "1px solid #1a2035", color: scenario.color, fontSize: 12, fontWeight: 700, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              {item.scenario}
            </div>
            <pre style={{ padding: 14, color: "#94a3b8", fontSize: 12, lineHeight: 1.8, whiteSpace: "pre-wrap", margin: 0, fontFamily: "monospace" }}>{item.steps}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

return null;
```

};

return (
<div style={{ minHeight: “100vh”, background: “#060912”, color: “#e2e8f0”, fontFamily: “‘IBM Plex Mono’, ‘Courier New’, monospace” }}>
<style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=IBM+Plex+Sans:wght@400;600;700;800&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; } ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-track { background: #08080f; } ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; } a { color: inherit; text-decoration: none; } pre { overflow-x: auto; white-space: pre-wrap; } button { cursor: pointer; font-family: inherit; border: none; }`}</style>

```
  {/* Header */}
  <div style={{ background: "#08080f", borderBottom: "1px solid #1a2035", padding: "14px 24px", display: "flex", alignItems: "center", gap: 16 }}>
    <div>
      <div style={{ fontSize: 9, color: "#1e293b", letterSpacing: 4, textTransform: "uppercase", marginBottom: 3 }}>Engineer's Context</div>
      <div style={{ fontSize: 18, fontWeight: 800, fontFamily: "'IBM Plex Sans', sans-serif", letterSpacing: -0.5 }}>
        Claude Code <span style={{ color: "#F97316" }}>Scenario</span> Cheat Sheet
      </div>
    </div>
    <div style={{ marginLeft: "auto", color: "#1e293b", fontSize: 10 }}>curated · no bloat · scenario-first</div>
  </div>

  <div style={{ display: "flex", height: "calc(100vh - 53px)" }}>
    {/* Sidebar */}
    <div style={{ width: 190, borderRight: "1px solid #1a2035", background: "#08080f", flexShrink: 0, overflowY: "auto", padding: "10px 0" }}>
      {SCENARIOS.map((s) => (
        <button
          key={s.id}
          onClick={() => setActive(s.id)}
          style={{
            display: "flex", alignItems: "flex-start", gap: 8, width: "100%", textAlign: "left",
            padding: "9px 14px", background: active === s.id ? `${s.color}12` : "transparent",
            borderLeft: active === s.id ? `3px solid ${s.color}` : "3px solid transparent",
            color: active === s.id ? s.color : "#334155", transition: "all 0.1s",
          }}
        >
          <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{s.emoji}</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: active === s.id ? 700 : 400 }}>{s.label}</div>
            <div style={{ fontSize: 10, color: active === s.id ? `${s.color}80` : "#1e293b", marginTop: 1 }}>{s.subtitle}</div>
          </div>
        </button>
      ))}
    </div>

    {/* Main content */}
    <div style={{ flex: 1, overflowY: "auto", padding: "22px 26px" }}>
      <div style={{ maxWidth: 860 }}>

        {/* Scenario header */}
        {active !== "essentials" && (
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: 22 }}>{scenario.emoji}</span>
              <h2 style={{ fontSize: 20, fontWeight: 800, fontFamily: "'IBM Plex Sans', sans-serif", color: scenario.color }}>{scenario.label}</h2>
            </div>
            <div style={{ color: "#334155", fontSize: 12 }}>{scenario.subtitle}</div>
          </div>
        )}

        {/* Essentials view */}
        {active === "essentials" && (
          <div>
            <div style={{ color: "#64748b", fontSize: 13, marginBottom: 20, lineHeight: 1.7 }}>
              The 10 tools that cover every scenario. Install these, nothing else. Each earns its place.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {STACK.map((tool) => (
                <a href={tool.url} target="_blank" rel="noreferrer" key={tool.id}>
                  <div
                    style={{ background: "#0a0e1a", borderRadius: 8, padding: 14, border: "1px solid #1a2035", transition: "border-color 0.15s", display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 16, alignItems: "center" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = tool.color + "50"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#1a2035"}
                  >
                    <div>
                      <div style={{ color: tool.color, fontSize: 12, fontWeight: 700 }}>{tool.label} ↗</div>
                      {tool.stars !== "—" && <div style={{ color: "#1e293b", fontSize: 10, marginTop: 2 }}>★ {tool.stars}</div>}
                    </div>
                    <div style={{ color: "#64748b", fontSize: 12, lineHeight: 1.5 }}>{tool.why}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <pre style={{ background: "#050810", color: "#7dd3fc", padding: "6px 10px", borderRadius: 6, fontSize: 10, border: "1px solid #1a2035", whiteSpace: "pre", minWidth: 220, maxWidth: 280, overflow: "hidden", textOverflow: "ellipsis" }}>{tool.install.split("\n")[0]}</pre>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Scenario sections */}
        {active !== "essentials" && scenario.sections.map(renderSection)}
      </div>
    </div>
  </div>
</div>
```

);
}

function SectionTitle({ title, color }) {
return (
<div style={{ display: “flex”, alignItems: “center”, gap: 8, marginBottom: 10 }}>
<div style={{ width: 3, height: 16, background: color, borderRadius: 2, flexShrink: 0 }} />
<div style={{ color: “#94a3b8”, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: “uppercase” }}>{title}</div>
</div>
);
}