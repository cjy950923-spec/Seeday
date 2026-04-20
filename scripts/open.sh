#!/usr/bin/env bash
# Seeday — 로컬 HTTP 서버를 띄우고 브라우저에서 HTML을 연다.
#
# 사용:
#   ./scripts/open.sh              # viewer.html (컴포넌트)
#   ./scripts/open.sh viewer       # 동일
#   ./scripts/open.sh tokens       # design-tokens-preview.html
#
#   PORT=9000 ./scripts/open.sh tokens

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PORT="${PORT:-8877}"

arg="${1:-viewer}"
case "$arg" in
  viewer | v | "")
    PAGE="viewer.html"
    ;;
  tokens | token | t)
    PAGE="design-tokens-preview.html"
    ;;
  -h | --help | help)
    printf '사용: %s [viewer|tokens]\n' "${0##*/}"
    printf '  viewer (기본)  컴포넌트 뷰어 — viewer.html\n'
    printf '  tokens          디자인 토큰 미리보기 — design-tokens-preview.html\n'
    printf '환경 변수: PORT (기본 %s)\n' "${PORT:-8877}"
    exit 0
    ;;
  *)
    printf '알 수 없는 인자: %q\n' "$arg" >&2
    printf '사용: %s [viewer|tokens]  (-h 도움말)\n' "${0##*/}" >&2
    exit 1
    ;;
esac

URL="http://127.0.0.1:${PORT}/${PAGE}"

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

sleep 0.4

open_browser
printf '\n열림: %s\n루트: %s\n종료: Ctrl+C\n\n' "$URL" "$ROOT"

wait "$SERVER_PID"
