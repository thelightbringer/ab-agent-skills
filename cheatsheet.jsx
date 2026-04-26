import { useState } from “react”;

const categories = [
{
id: “skills”,
label: “Skills”,
emoji: “🧠”,
color: “#10B981”,
tagline: “Teach Claude domain expertise on demand”,
what: “SKILL.md files (YAML + Markdown) that agents auto-load. ~100 tokens to scan, <5k when activated.”,
install: `# Global
~/.claude/skills/<name>/SKILL.md

# Per-project

.claude/skills/<name>/SKILL.md

# Via CLI

npx ai-devkit skill add <owner>/<repo>`, repos: [ { name: "garrytan/gstack", stars: "66k+", desc: "23 specialist skills: CEO, Designer, Eng Manager, QA, Security. Full sprint workflow.", tag: "⭐ Must", url: "https://github.com/garrytan/gstack" }, { name: "addyosmani/agent-skills", stars: "—", desc: "20 skills with Google eng culture: Hyrum's Law, Beyoncé Rule, Chesterton's Fence, TDD.", tag: "⭐ Must", url: "https://github.com/addyosmani/agent-skills" }, { name: "anthropics/skills", stars: "37.5k+", desc: "Official: docx, pdf, xlsx, pptx, mcp-builder, skill-creator, internal-comms.", tag: "Official", url: "https://github.com/anthropics/skills" }, { name: "obra/superpowers", stars: "148k+", desc: "Most popular library. brainstorm→spec→plan→TDD→review→merge. Subagent orchestration.", tag: "⭐ Must", url: "https://github.com/obra/superpowers" }, { name: "trailofbits/claude-code-skills", stars: "—", desc: "Security research skills. Vulnerability detection workflows by Trail of Bits.", tag: "Security", url: "https://github.com/trailofbits/claude-code-skills" }, { name: "ay-automate/ay-skills", stars: "—", desc: "SEO audits, headless browser automation, Remotion video generation, diagrams.", tag: "Creative", url: "https://github.com/ay-automate/ay-skills" }, { name: "everything-claude-code", stars: "—", desc: "136 skills, 30 agents, 60 slash commands, 1282 tests. Hackathon winner.", tag: "Mega", url: "https://github.com/affaan-m/everything-claude-code" }, ], commands: [ { cmd: "/office-hours", from: "gstack", desc: "Product thinking. Challenges your framing before you write a line." }, { cmd: "/autoplan", from: "gstack", desc: "CEO + design + eng review pipeline in one shot." }, { cmd: "/review", from: "gstack", desc: "Staff-level adversarial review + Codex second opinion." }, { cmd: "/qa", from: "gstack", desc: "Playwright QA: clicks through your app, finds bugs, writes regression tests." }, { cmd: "/ship", from: "gstack", desc: "Bootstraps test framework, enforces coverage, creates PR." }, { cmd: "/cso", from: "gstack", desc: "OWASP Top 10 + STRIDE threat model." }, { cmd: "/investigate", from: "gstack", desc: "Root-cause debug. No fixes without investigation." }, { cmd: "/brainstorm", from: "superpowers", desc: "Interactive design refinement loop." }, { cmd: "/write-plan", from: "superpowers", desc: "Create structured implementation plan." }, { cmd: "/execute-plan", from: "superpowers", desc: "Execute plan in batches with verification." }, ], }, { id: "agents", label: "Agents & Subagents", emoji: "🤖", color: "#8B5CF6", tagline: "Specialists with isolated context for each task", what: "Instead of one Claude juggling 20 tasks, spawn specialists: each with its own context, one job.", install: `# Copy to project
.claude/agents/<name>.md

# Or via plugin

/plugin install <agent>@marketplace`, repos: [ { name: "wshobson/agents", stars: "25k+", desc: "Massive collection: strategy, dev, security, design, data, research agents.", tag: "⭐ Must", url: "https://github.com/wshobson/agents" }, { name: "davepoon/claude-code-subagents-collection", stars: "2.2k+", desc: "100+ production-ready subagents. Comprehensive domain coverage.", tag: "Mega", url: "https://github.com/davepoon/claude-code-subagents-collection" }, { name: "VoltAgent/awesome-claude-code-subagents", stars: "—", desc: "Hand-picked subagents for every stack. Domain-specific expertise bundles.", tag: "Curated", url: "https://github.com/VoltAgent/awesome-claude-code-subagents" }, { name: "baryhuang/claude-code-agents", stars: "—", desc: "59 specialists: TS, Python, Java, Kotlin reviewers + workflow automation.", tag: "Language", url: "https://github.com/baryhuang/claude-code-agents" }, { name: "Agent-Fusion", stars: "—", desc: "Multi-agent across Claude Code, Codex CLI, Amazon Q, Gemini. Bidirectional.", tag: "Cross-agent", url: "https://github.com/0xAsten/Agent-Fusion" }, { name: "vijaythecoder/awesome-claude-agents", stars: "3.7k+", desc: "Team of agents that collaborate on full features. Expert-level knowledge.", tag: "Team", url: "https://github.com/vijaythecoder/awesome-claude-agents" }, ], }, { id: "orchestration", label: "Orchestration", emoji: "⚡", color: "#F97316", tagline: "Run parallel agents, preserve state, coordinate workflows", what: "Overcome the one-session bottleneck. Run parallel Claude sessions like managing a small dev team.", install: null, repos: [ { name: "smtg-ai/claude-squad", stars: "5.6k+", desc: "Terminal multiplexer for AI agents. Manages Claude Code, Aider, Codex, OpenCode in parallel.", tag: "⭐ Must", url: "https://github.com/smtg-ai/claude-squad" }, { name: "ruvnet/claude-flow", stars: "11.4k+", desc: "Enterprise-grade orchestration platform. Multi-agent with persistent memory.", tag: "Enterprise", url: "https://github.com/ruvnet/claude-flow" }, { name: "automazeio/ccpm", stars: "—", desc: "Project-management workflow. Specialized agents + slash commands. Turnkey.", tag: "PM", url: "https://github.com/automazeio/ccpm" }, { name: "cc-sessions/cc-sessions", stars: "1.5k+", desc: "Hooks, subagents, commands. Task/git management infrastructure.", tag: "Workflow", url: "https://github.com/cc-sessions/cc-sessions" }, { name: "Dicklesworthstone/claude_code_agent_farm", stars: "—", desc: "Run multiple Claude Code agents at scale. Systematic codebase improvement.", tag: "Scale", url: "https://github.com/Dicklesworthstone/claude_code_agent_farm" }, { name: "agentsys/agentsys", stars: "473+", desc: "14 plugins, 43 agents, 30 skills. Claude Code + OpenCode + Codex.", tag: "Multi-tool", url: "https://github.com/agentsys/agentsys" }, ], }, { id: "mcp", label: "MCP Servers", emoji: "🔌", color: "#06B6D4", tagline: "Connect Claude to your actual stack", what: "Bridges that give Claude access to GitHub, Postgres, browsers, Figma, Slack — anything with an API.", install: `claude mcp add <name> – <command>

# or in claude_desktop_config.json`,

```
repos: [
  { name: "github/github-mcp-server", stars: "—", desc: "Official GitHub MCP. Repos, PRs, issues, CI/CD. Most-used in ecosystem.", tag: "⭐ Must", url: "https://github.com/github/github-mcp-server" },
  { name: "microsoft/playwright-mcp", stars: "—", desc: "Browser automation. Navigate, click, scrape dynamic content. Microsoft-backed.", tag: "Browser", url: "https://github.com/microsoft/playwright-mcp" },
  { name: "upstash/context7", stars: "—", desc: "Real-time version-specific docs in prompts. Works with Cursor, Claude Code, Windsurf.", tag: "Docs", url: "https://github.com/upstash/context7" },
  { name: "crystaldba/postgres-mcp", stars: "—", desc: "Safe PostgreSQL MCP. Read-only default, multi-connection, defense-in-depth.", tag: "Database", url: "https://github.com/crystaldba/postgres-mcp" },
  { name: "steipete/claude-code-mcp", stars: "—", desc: "Claude Code itself as MCP server. Enables agent-in-agent recursive delegation.", tag: "Meta", url: "https://github.com/steipete/claude-code-mcp" },
  { name: "zilliztech/claude-context", stars: "—", desc: "Semantic code search MCP for massive codebases. Pulls right files without breadcrumbs.", tag: "Context", url: "https://github.com/zilliztech/claude-context" },
  { name: "d-e-s-o/claude-context-mode", stars: "2.2k+", desc: "Token saver: 315 KB → 5.4 KB (98% reduction). Between Claude Code and outputs.", tag: "Perf", url: "https://github.com/d-e-s-o/claude-context-mode" },
  { name: "garrytan/gbrain", stars: "—", desc: "Persistent knowledge base. Postgres+pgvector hybrid search across sessions.", tag: "Memory", url: "https://github.com/garrytan/gbrain" },
],
```

},
{
id: “memory”,
label: “Memory & Context”,
emoji: “💾”,
color: “#F59E0B”,
tagline: “Survive beyond one session”,
what: “Every session starts blank. These tools persist architecture decisions, debugging history, and domain knowledge.”,
install: null,
repos: [
{ name: “yamadashy/repomix”, stars: “20.9k+”, desc: “Pack entire codebase into one AI-readable file. XML/Markdown/plain text. Essential for big repos.”, tag: “⭐ Must”, url: “https://github.com/yamadashy/repomix” },
{ name: “thedotmack/claude-mem”, stars: “—”, desc: “Long-term memory via compression. Persists context between sessions. Solves #1 complaint.”, tag: “Session”, url: “https://github.com/thedotmack/claude-mem” },
{ name: “0xfurai/claude-subconscious”, stars: “2.4k+”, desc: “Background agent that watches sessions, reads files, builds memory over time.”, tag: “Background”, url: “https://github.com/0xfurai/claude-subconscious” },
{ name: “elizaOS/context-prime”, stars: “—”, desc: “Systematic project context priming. Scenario-specific priming commands.”, tag: “Priming”, url: “https://github.com/elizaOS/context-prime” },
{ name: “safishamsi/graphify”, stars: “—”, desc: “Interactive knowledge graph from codebase. Great for onboarding new devs.”, tag: “Graph”, url: “https://github.com/safishamsi/graphify” },
],
},
{
id: “commands”,
label: “Slash Commands & Hooks”,
emoji: “⌨️”,
color: “#EC4899”,
tagline: “One keystroke instead of a paragraph, every time”,
what: “Slash commands = saved prompts. Hooks = rules enforced automatically at key workflow moments.”,
install: `# Slash commands
.claude/commands/<name>.md

# Hooks (in CLAUDE.md or settings)

hooks:
PreToolUse: [bash command]
PostToolUse: [bash command]`,
repos: [
{ name: “wshobson/commands”, stars: “1.7k+”, desc: “57 production-ready slash commands. 15 workflows + 42 tools. Multi-agent orchestration.”, tag: “⭐ Must”, url: “https://github.com/wshobson/commands” },
{ name: “nizos/tdd-guard”, stars: “1.7k+”, desc: “Automated TDD enforcement hook. Blocks skipping tests, explains why it blocked.”, tag: “TDD”, url: “https://github.com/nizos/tdd-guard” },
{ name: “RonitSachdev/ccundo”, stars: “1.3k+”, desc: “Granular undo for Claude Code. Action-level rollback. Seamless integration.”, tag: “Safety”, url: “https://github.com/RonitSachdev/ccundo” },
{ name: “anthropics/claude-code-security-review”, stars: “2.8k+”, desc: “Security review GitHub Action. Analyzes PR diffs for vulnerabilities. Drop-in CI/CD.”, tag: “CI/CD”, url: “https://github.com/anthropics/claude-code-security-review” },
{ name: “claude-commands/command-fix-issue”, stars: “—”, desc: “/fix-issue 456 → Red→Green→Refactor → creates PR automatically.”, tag: “TDD”, url: “https://github.com/claude-commands/command-fix-issue” },
{ name: “danielrosehill/Claude-Slash-Commands”, stars: “—”, desc: “Curated custom commands organized by category. Index-based discovery.”, tag: “Curated”, url: “https://github.com/danielrosehill/Claude-Slash-Commands” },
],
},
{
id: “indexes”,
label: “Discovery & Indexes”,
emoji: “🗺️”,
color: “#64748b”,
tagline: “Navigate the ecosystem without drowning”,
what: “The ecosystem moves too fast. Curated lists do the searching, classifying, and quality-filtering for you.”,
install: null,
repos: [
{ name: “hesreallyhim/awesome-claude-code”, stars: “28.5k+”, desc: “The main index. Only Claude can submit PRs. Skills, hooks, commands, plugins.”, tag: “⭐ Main”, url: “https://github.com/hesreallyhim/awesome-claude-code” },
{ name: “VoltAgent/awesome-agent-skills”, stars: “—”, desc: “1000+ skills from Vercel, Stripe, Cloudflare, Trail of Bits, Sentry, Figma, Angular.”, tag: “Skills”, url: “https://github.com/VoltAgent/awesome-agent-skills” },
{ name: “ComposioHQ/awesome-claude-skills”, stars: “—”, desc: “50+ production skills. PostgreSQL, deep research, CSV, root-cause tracing.”, tag: “Skills”, url: “https://github.com/ComposioHQ/awesome-claude-skills” },
{ name: “claudewave/claudewave”, stars: “—”, desc: “Real-time directory. 3800+ repos, 8 categories, updated every 12 hours.”, tag: “Live”, url: “https://github.com/claudewave/claudewave” },
{ name: “skillsmp.com”, stars: “—”, desc: “Searchable marketplace. Filter by agent, category, stars.”, tag: “Web”, url: “https://skillsmp.com” },
{ name: “travisvn/awesome-claude-skills”, stars: “22k installs”, desc: “Community best-of. SEO, marketing, design, security, research.”, tag: “Community”, url: “https://github.com/travisvn/awesome-claude-skills” },
],
},
{
id: “learning”,
label: “Guides & Learning”,
emoji: “📚”,
color: “#84cc16”,
tagline: “What nobody tells you about Claude Code”,
what: “Skills, MCP, hooks, context engineering, token economics — most devs get stuck here and blame the tool.”,
install: null,
repos: [
{ name: “FlorianBruniaux/claude-code-ultimate-guide”, stars: “—”, desc: “22,000+ line guide. 225 templates, 9 personas, 26 slash commands, 271 quiz questions.”, tag: “Mega”, url: “https://github.com/FlorianBruniaux/claude-code-ultimate-guide” },
{ name: “wolfmcnally/Encyclopedia-of-Agentic-Coding-Patterns”, stars: “—”, desc: “190+ patterns. Foundational → agentic construction → governance + testing.”, tag: “Patterns”, url: “https://github.com/wolfmcnally/Encyclopedia-of-Agentic-Coding-Patterns” },
{ name: “Piebald-AI/claude-code-system-prompts”, stars: “—”, desc: “All Claude Code system prompts, updated within minutes of each release. 155+ versions.”, tag: “Internals”, url: “https://github.com/Piebald-AI/claude-code-system-prompts” },
{ name: “VILA-Lab/Dive-into-Claude-Code”, stars: “—”, desc: “Systematic analysis: 98.4% infrastructure, 1.6% AI decision logic. Architecture deep-dive.”, tag: “Deep”, url: “https://github.com/VILA-Lab/Dive-into-Claude-Code” },
{ name: “ThamJiaHe/claude-prompt-engineering-guide”, stars: “—”, desc: “Covers Opus 4.6, Sonnet 4.6, Haiku 4.5. Skills, Plugins, MCP, Hooks, Ultrathink.”, tag: “Prompts”, url: “https://github.com/ThamJiaHe/claude-prompt-engineering-guide” },
{ name: “anthropics/courses”, stars: “—”, desc: “Free official courses. Prompt engineering, API usage, agents, AI Fluency.”, tag: “Official”, url: “https://github.com/anthropics/courses” },
{ name: “beyond.addy.ie”, stars: “—”, desc: “Addy Osmani’s ‘Beyond Vibe Coding’ — spec-driven, context engineering, production AI dev.”, tag: “Book”, url: “https://beyond.addy.ie” },
],
},
{
id: “quickstart”,
label: “Quick Start Path”,
emoji: “🚀”,
color: “#F97316”,
tagline: “What to install first”,
what: null,
install: null,
repos: [],
},
];

const quickstartSteps = [
{
step: “1”,
title: “Install Claude Code”,
cmd: “npm install -g @anthropic-ai/claude-code”,
note: “Official CLI from Anthropic”,
color: “#F97316”,
},
{
step: “2”,
title: “Add Garry Tan’s gstack”,
cmd: “git clone https://github.com/garrytan/gstack ~/.claude/skills/gstack”,
note: “23 specialist skills. Your virtual engineering team.”,
color: “#8B5CF6”,
},
{
step: “3”,
title: “Add Osmani’s agent-skills”,
cmd: “npx ai-devkit skill add addyosmani/agent-skills”,
note: “Google-grade engineering discipline baked in.”,
color: “#10B981”,
},
{
step: “4”,
title: “Add Anthropic’s official skills”,
cmd: “/plugin marketplace add anthropic-agent-skills”,
note: “docx, pdf, pptx, xlsx, mcp-builder (run inside Claude Code)”,
color: “#F59E0B”,
},
{
step: “5”,
title: “Add obra/superpowers”,
cmd: “/plugin marketplace add obra/superpowers”,
note: “148k★ TDD→review→merge workflow.”,
color: “#06B6D4”,
},
{
step: “6”,
title: “Add GitHub MCP”,
cmd: “claude mcp add github – github-mcp-server”,
note: “PRs, issues, CI/CD directly in Claude.”,
color: “#EC4899”,
},
{
step: “7”,
title: “Install tdd-guard hook”,
cmd: “git clone https://github.com/nizos/tdd-guard”,
note: “Enforces TDD automatically. Blocks skipping tests.”,
color: “#84cc16”,
},
{
step: “8”,
title: “Explore the ecosystem”,
cmd: “open https://skillsmp.com  # or VoltAgent/awesome-agent-skills”,
note: “1000+ skills. Filter to your stack.”,
color: “#64748b”,
},
];

const decisionMatrix = [
{ when: “Ship a feature end-to-end”, use: “/office-hours → /autoplan → /ship”, source: “gstack”, color: “#8B5CF6” },
{ when: “Enforce spec-first discipline”, use: “spec-driven-development skill”, source: “osmani”, color: “#10B981” },
{ when: “Write tests properly (TDD)”, use: “test-driven-development + tdd-guard hook”, source: “osmani + guard”, color: “#10B981” },
{ when: “Staff-level code review on a PR”, use: “/review (adversarial + Codex cross-check)”, source: “gstack”, color: “#8B5CF6” },
{ when: “Browser / E2E QA automated”, use: “/qa (Playwright)”, source: “gstack”, color: “#8B5CF6” },
{ when: “Security audit”, use: “/cso (OWASP + STRIDE)”, source: “gstack”, color: “#8B5CF6” },
{ when: “Debug a production bug”, use: “/investigate or debugging-and-error-recovery”, source: “gstack/osmani”, color: “#F97316” },
{ when: “Run parallel agent sessions”, use: “claude-squad”, source: “orchestration”, color: “#F97316” },
{ when: “GitHub PR/issue access”, use: “github-mcp-server”, source: “MCP”, color: “#06B6D4” },
{ when: “Query your database”, use: “postgres-mcp or sqlite-mcp”, source: “MCP”, color: “#06B6D4” },
{ when: “Load latest docs for a library”, use: “context7 MCP”, source: “MCP”, color: “#06B6D4” },
{ when: “Persist knowledge across sessions”, use: “claude-mem or gbrain”, source: “memory”, color: “#F59E0B” },
{ when: “Pack codebase for context”, use: “repomix”, source: “memory”, color: “#F59E0B” },
{ when: “Create Word/PDF/PPTX/XLSX”, use: “anthropics/skills document skills”, source: “official”, color: “#F59E0B” },
{ when: “Build an MCP server”, use: “mcp-builder skill”, source: “official”, color: “#F59E0B” },
{ when: “API design (backward compat)”, use: “api-design skill (Hyrum’s Law)”, source: “osmani”, color: “#10B981” },
{ when: “Find a skill for X tool”, use: “skillsmp.com or awesome-agent-skills”, source: “discovery”, color: “#64748b” },
];

export default function CheatSheet() {
const [active, setActive] = useState(“quickstart”);
const section = categories.find((c) => c.id === active);

return (
<div style={{ minHeight: “100vh”, background: “#060912”, color: “#e2e8f0”, fontFamily: “‘IBM Plex Mono’, ‘Courier New’, monospace” }}>
<style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=IBM+Plex+Sans:wght@400;600;700;800&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; } ::-webkit-scrollbar { width: 5px; height: 5px; } ::-webkit-scrollbar-track { background: #0a0e1a; } ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; } a { color: inherit; text-decoration: none; } pre { overflow-x: auto; white-space: pre-wrap; } button { cursor: pointer; font-family: inherit; }`}</style>

```
  {/* Header */}
  <div style={{ background: "#080c18", borderBottom: "1px solid #1a2035", padding: "16px 28px", display: "flex", alignItems: "center", gap: 20 }}>
    <div>
      <div style={{ fontSize: 10, color: "#334155", letterSpacing: 4, textTransform: "uppercase", marginBottom: 3 }}>Principal Engineer Reference</div>
      <div style={{ fontSize: 20, fontWeight: 800, fontFamily: "'IBM Plex Sans', sans-serif", letterSpacing: -0.5 }}>
        Claude Code <span style={{ color: "#F97316" }}>Ecosystem</span> <span style={{ color: "#334155" }}>—</span> <span style={{ color: "#10B981" }}>Cheat Sheet</span>
      </div>
    </div>
    <div style={{ marginLeft: "auto", display: "flex", gap: 6, flexWrap: "wrap" }}>
      {["Claude Code", "Cursor", "Codex", "Windsurf", "Gemini CLI"].map((t) => (
        <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, border: "1px solid #1e293b", color: "#475569" }}>{t}</span>
      ))}
    </div>
  </div>

  <div style={{ display: "flex", height: "calc(100vh - 57px)" }}>
    {/* Sidebar */}
    <div style={{ width: 200, borderRight: "1px solid #1a2035", background: "#080c18", flexShrink: 0, overflowY: "auto", padding: "12px 0" }}>
      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => setActive(c.id)}
          style={{
            display: "flex", alignItems: "center", gap: 8, width: "100%", textAlign: "left",
            padding: "9px 16px", background: active === c.id ? `${c.color}15` : "transparent",
            border: "none", borderLeft: active === c.id ? `3px solid ${c.color}` : "3px solid transparent",
            color: active === c.id ? c.color : "#475569", fontSize: 12, transition: "all 0.12s",
          }}
        >
          <span style={{ fontSize: 14 }}>{c.emoji}</span>
          <span>{c.label}</span>
        </button>
      ))}
    </div>

    {/* Content */}
    <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
      <div style={{ maxWidth: 900 }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 24 }}>{section.emoji}</span>
          <h2 style={{ fontSize: 22, fontWeight: 800, fontFamily: "'IBM Plex Sans', sans-serif", color: section.color }}>{section.label}</h2>
        </div>
        <div style={{ color: "#64748b", fontSize: 13, marginBottom: 20 }}>{section.tagline}</div>

        {/* Quick Start */}
        {active === "quickstart" && (
          <div>
            <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 20, lineHeight: 1.7 }}>
              Install these 8 things and you'll be in the top 5% of Claude Code users. Takes ~15 minutes.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {quickstartSteps.map((s) => (
                <div key={s.step} style={{ background: "#0a0e1a", borderRadius: 8, padding: 16, border: `1px solid ${s.color}30`, display: "grid", gridTemplateColumns: "28px 1fr", gap: 14, alignItems: "start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${s.color}20`, border: `1px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <div style={{ color: "#f1f5f9", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{s.title}</div>
                    <pre style={{ background: "#050810", color: "#7dd3fc", padding: "8px 12px", borderRadius: 6, fontSize: 12, marginBottom: 6, border: "1px solid #1a2035" }}>{s.cmd}</pre>
                    <div style={{ color: "#64748b", fontSize: 12 }}>{s.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decision Matrix */}
            <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 3, height: 20, background: "#F97316", borderRadius: 2 }} />
              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: "'IBM Plex Sans', sans-serif", color: "#f1f5f9" }}>Decision Matrix</h3>
            </div>
            <div style={{ color: "#64748b", fontSize: 12, marginBottom: 14 }}>What to reach for and when.</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {decisionMatrix.map(({ when, use, source, color }) => (
                <div key={when} style={{ display: "grid", gridTemplateColumns: "2fr 2.5fr 100px", gap: 10, background: "#0a0e1a", borderRadius: 6, padding: "10px 14px", border: "1px solid #1a2035", alignItems: "center" }}>
                  <div style={{ color: "#cbd5e1", fontSize: 12 }}>{when}</div>
                  <div style={{ color: "#7dd3fc", fontFamily: "monospace", fontSize: 11 }}>{use}</div>
                  <div style={{ color, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textAlign: "right" }}>{source}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular sections */}
        {active !== "quickstart" && (
          <div>
            {section.what && (
              <div style={{ background: "#0a0e1a", borderRadius: 8, padding: 14, marginBottom: 16, border: "1px solid #1a2035", color: "#94a3b8", fontSize: 13, lineHeight: 1.7 }}>
                {section.what}
              </div>
            )}

            {section.install && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: section.color, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>File locations / Install</div>
                <pre style={{ background: "#050810", color: "#7dd3fc", padding: 14, borderRadius: 8, fontSize: 12, border: "1px solid #1a2035", lineHeight: 1.7 }}>{section.install}</pre>
              </div>
            )}

            {section.repos.length > 0 && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ color: section.color, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Key Repos</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {section.repos.map(({ name, stars, desc, tag, url }) => (
                    <a href={url} target="_blank" rel="noreferrer" key={name}>
                      <div style={{ background: "#0a0e1a", borderRadius: 8, padding: 14, border: "1px solid #1a2035", height: "100%", transition: "border-color 0.15s", cursor: "pointer" }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = section.color + "60"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "#1a2035"}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                          <div style={{ color: section.color, fontFamily: "monospace", fontWeight: 700, fontSize: 12 }}>{name} ↗</div>
                          <div style={{ fontSize: 10, padding: "1px 7px", borderRadius: 20, background: `${section.color}20`, color: section.color, flexShrink: 0, marginLeft: 8 }}>{tag}</div>
                        </div>
                        {stars && <div style={{ color: "#334155", fontSize: 10, marginBottom: 6 }}>★ {stars}</div>}
                        <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.5 }}>{desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {section.commands && (
              <div>
                <div style={{ color: section.color, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Key Commands</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {section.commands.map(({ cmd, from, desc }) => (
                    <div key={cmd} style={{ display: "grid", gridTemplateColumns: "180px 80px 1fr", gap: 12, background: "#0a0e1a", borderRadius: 6, padding: "10px 14px", border: "1px solid #1a2035", alignItems: "center" }}>
                      <div style={{ color: section.color, fontFamily: "monospace", fontWeight: 700, fontSize: 13 }}>{cmd}</div>
                      <div style={{ color: "#334155", fontSize: 10, fontWeight: 600, textTransform: "uppercase" }}>{from}</div>
                      <div style={{ color: "#94a3b8", fontSize: 12 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
</div>
```

);
}