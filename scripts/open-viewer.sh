#!/usr/bin/env bash
# Seeday — UI 컴포넌트 뷰어(viewer.html). open.sh 로 위임한다.
# 사용: ./scripts/open-viewer.sh
#      PORT=9000 ./scripts/open-viewer.sh

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec "$SCRIPT_DIR/open.sh" viewer
