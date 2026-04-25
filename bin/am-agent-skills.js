#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { install, TARGET_BASE, SKILLS_SRC } = require('../scripts/install.js');

const [,, cmd, ...args] = process.argv;
const dryRun = args.includes('--dry-run');

switch (cmd) {
  case 'install':
    install({ dryRun });
    break;

  case 'list': {
    console.log('\nAvailable skills in am-agent-skills:\n');
    const skills = fs.readdirSync(SKILLS_SRC, { withFileTypes: true })
      .filter(e => e.isDirectory());
    for (const skill of skills) {
      const skillFile = path.join(SKILLS_SRC, skill.name, 'SKILL.md');
      if (!fs.existsSync(skillFile)) continue;
      const content = fs.readFileSync(skillFile, 'utf8');
      const nameMatch = content.match(/^name:\s*(.+)$/m);
      const descLine = content.match(/^description:\s*[>|]?\s*\n?\s*(.+)/m);
      const displayName = nameMatch ? nameMatch[1].trim() : skill.name;
      const desc = descLine ? descLine[1].trim().replace(/\s+/g, ' ').slice(0, 72) : '';
      console.log(`  /${displayName.padEnd(18)} ${desc}`);
    }
    console.log(`\nInstalled at: ${TARGET_BASE}`);
    console.log('Run "am-agent-skills install" to copy skills to Claude Code.\n');
    break;
  }

  case 'update':
    console.log('[am-agent-skills] Updating skills...');
    install({ dryRun });
    break;

  case undefined:
  case '--help':
  case 'help':
    console.log(`
am-agent-skills — Curated Claude Code agent skills by Abhijit Misra

Usage:
  am-agent-skills install    Copy skills to ~/.claude/skills/am-agent-skills/
  am-agent-skills list       Show all available skills
  am-agent-skills update     Re-install / update skills to latest version

Options:
  --dry-run    Preview what would be installed without copying files
  --help       Show this help message

Skills are installed to: ~/.claude/skills/am-agent-skills/
GitHub: https://github.com/thelightbringer/am-agent-skills
    `.trim());
    break;

  default:
    console.error(`Unknown command: ${cmd}`);
    console.error('Run "am-agent-skills help" for usage.');
    process.exit(1);
}
