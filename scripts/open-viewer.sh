#!/usr/bin/env bash
# Seeday — 터미널에서 UI 컴포넌트 뷰어(viewer.html)를 연다.
# 사용: ./scripts/open-viewer.sh
#      PORT=9000 ./scripts/open-viewer.sh

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PORT="${PORT:-8877}"
URL="http://127.0.0.1:${PORT}/viewer.html"

open_browser() {
  if [[ "$(uname -s)" == "Darwin" ]]; then
    open "$URL"
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$URL"
  else
    printf '브라우저에서 직접 열기: %s\n' "$URL"
  fi
}

if command -v lsof >/dev/null 2>&1 && lsof -i ":${PORT}" >/dev/null 2>&1; then
  printf '포트 %s 이미 사용 중 — 서버는 그대로 두고 브라우저만 엽니다.\n' "$PORT"
  open_browser
  exit 0
fi

BIND_ARGS=()
if python3 -m http.server --help 2>&1 | grep -q -- '--bind'; then
  BIND_ARGS=(--bind 127.0.0.1)
fi

python3 -m http.server "$PORT" "${BIND_ARGS[@]}" >/dev/null &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

# 서버 기동 대기 (짧게; 필요하면 늘리기)
sleep 0.4

open_browser
printf '\n뷰어: %s\n루트: %s\n종료: Ctrl+C\n\n' "$URL" "$ROOT"

wait "$SERVER_PID"
