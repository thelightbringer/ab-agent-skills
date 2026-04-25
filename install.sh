#!/usr/bin/env bash
# am-agent-skills shell installer
# Usage: curl -fsSL https://raw.githubusercontent.com/thelightbringer/am-agent-skills/main/install.sh | bash

set -euo pipefail

REPO_URL="https://github.com/thelightbringer/am-agent-skills"
SKILLS_DIR="${HOME}/.claude/skills/am-agent-skills"
TMPDIR_INST="$(mktemp -d)"

echo "[am-agent-skills] Installing skills to ${SKILLS_DIR}..."

cleanup() { rm -rf "${TMPDIR_INST}"; }
trap cleanup EXIT

if command -v git &>/dev/null; then
  git clone --depth=1 "${REPO_URL}.git" "${TMPDIR_INST}/repo"
  mkdir -p "${SKILLS_DIR}"
  cp -r "${TMPDIR_INST}/repo/skills/." "${SKILLS_DIR}/"
elif command -v curl &>/dev/null; then
  curl -fsSL "${REPO_URL}/archive/refs/heads/main.tar.gz" \
    | tar xz -C "${TMPDIR_INST}"
  mkdir -p "${SKILLS_DIR}"
  cp -r "${TMPDIR_INST}/am-agent-skills-main/skills/." "${SKILLS_DIR}/"
else
  echo "ERROR: git or curl is required to install am-agent-skills." >&2
  exit 1
fi

echo "[am-agent-skills] Done. Skills installed:"
ls "${SKILLS_DIR}"
echo ""
echo "Restart Claude Code to activate skills."
