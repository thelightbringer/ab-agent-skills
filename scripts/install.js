#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const PACKAGE_NAME = 'am-agent-skills';
const SKILLS_SRC = path.join(__dirname, '..', 'skills');
const TARGET_BASE = path.join(os.homedir(), '.claude', 'skills', PACKAGE_NAME);

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function install({ dryRun = false, silent = false } = {}) {
  const log = silent ? () => {} : console.log;
  const warn = silent ? () => {} : console.warn;

  if (!fs.existsSync(SKILLS_SRC)) {
    warn(`[am-agent-skills] WARNING: skills directory not found at ${SKILLS_SRC}`);
    return { success: false, reason: 'skills-src-missing' };
  }

  const claudeDir = path.join(os.homedir(), '.claude');
  if (!fs.existsSync(claudeDir)) {
    warn(`[am-agent-skills] WARNING: ~/.claude not found.`);
    warn(`[am-agent-skills] Install Claude Code first: https://claude.ai/code`);
    warn(`[am-agent-skills] Then run: am-agent-skills install`);
    return { success: false, reason: 'claude-not-installed' };
  }

  log(`[am-agent-skills] Installing skills to ${TARGET_BASE} ...`);

  const skillDirs = fs.readdirSync(SKILLS_SRC, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name);

  const installed = [];
  for (const skillName of skillDirs) {
    const src = path.join(SKILLS_SRC, skillName);
    const dest = path.join(TARGET_BASE, skillName);
    if (!dryRun) {
      copyDirSync(src, dest);
    }
    installed.push(skillName);
    log(`  ${dryRun ? '[dry-run] ' : ''}+ ${skillName}`);
  }

  log(`\n[am-agent-skills] Done. ${installed.length} skills installed.`);
  log(`[am-agent-skills] Restart Claude Code to activate skills.\n`);
  return { success: true, installed };
}

if (require.main === module) {
  try {
    install();
  } catch (err) {
    console.warn(`[am-agent-skills] Skill installation failed (non-fatal): ${err.message}`);
    console.warn('[am-agent-skills] Run "am-agent-skills install" manually after installing Claude Code.');
    process.exit(0);
  }
}

module.exports = { install, TARGET_BASE, SKILLS_SRC };
