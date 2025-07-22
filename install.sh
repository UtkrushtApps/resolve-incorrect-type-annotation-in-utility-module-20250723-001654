#!/bin/bash
set -e

echo "[install.sh] Installing dependencies and building project..."
if [ -f package.json ]; then
  npm install
fi

if [ -f tsconfig.json ]; then
  npx tsc
fi

echo "[install.sh] Installation and build complete."
