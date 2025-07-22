#!/bin/bash
set -e

./install.sh

echo "[run.sh] Starting the application..."
if [ -f dist/index.js ]; then
  node dist/index.js
else
  echo "[run.sh] dist/index.js not found. Did build fail?"
  exit 1
fi
