#!/usr/bin/env bash
set -euo pipefail
REPO_ROOT=$(git rev-parse --show-toplevel)
INPUT=$1
OUTPUT=${2:-${INPUT%.md}.pdf}

TMPFILE=$(mktemp /tmp/exam_XXXXXX.md)
trap 'rm -f "$TMPFILE"' EXIT

echo "=== RAW INPUT (snippet) ==="
grep -n '\\\\(' "$INPUT" | head -20 || true

echo "=== AFTER SED (snippet) ==="
sed -En 's/\\\\\(/$/gp; s/\\\\\)/$/gp' "$INPUT" | head -20 || true

# Actually transform full file:
sed -E \
  -e 's/\$\$([^$]+)\$\$/ \$\1\$ /g' \
  -e 's/\\\\\(/$/g' \
  -e 's/\\\\\)/$/g' \
  "$INPUT" > "$TMPFILE"

echo "=== TMPFILE (snippet around math) ==="
grep -n '\$' "$TMPFILE" | head -20 || true

pandoc "$TMPFILE" \
  --resource-path="$REPO_ROOT/docs" \
  --template=eisvogel \
  --lua-filter="$REPO_ROOT/scripts/fix_img_paths.lua" \
  -H "$REPO_ROOT/site-source/_tex/latex-macros.tex" \
  -o "$OUTPUT"
