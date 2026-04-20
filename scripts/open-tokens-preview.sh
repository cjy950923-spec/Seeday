#!/usr/bin/env bash
# Seeday — 디자인 토큰 미리보기(design-tokens-preview.html). open.sh 로 위임한다.
# 사용: ./scripts/open-tokens-preview.sh
#      PORT=9000 ./scripts/open-tokens-preview.sh

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec "$SCRIPT_DIR/open.sh" tokens
