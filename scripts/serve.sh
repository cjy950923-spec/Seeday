#!/usr/bin/env bash
# 프로젝트 루트에서 정적 서버만 띄움. 터미널에 열 URL을 전부 찍는다.
# 사용: ./scripts/serve.sh   또는   npm start / npm run dev
# 포트: 기본 8877, 이미 쓰 중이면 8878, 8879 … 자동으로 빈 포트를 쓴다.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
REQUESTED_PORT="${PORT:-8877}"

# 이 프로세스가 127.0.0.1:포트에 바인드할 수 있는지 확인 (다른 터미널이 점유 중이면 실패)
port_is_free() {
  local p="$1"
  python3 -c "import socket; s=socket.socket();
s.bind(('127.0.0.1',int('$p'))); s.close()" 2>/dev/null
}

pick_free_port() {
  local start="${1:-8877}"
  local p
  for ((p = start; p <= 8999; p++)); do
    if port_is_free "$p"; then
      echo "$p"
      return 0
    fi
  done
  return 1
}

if ! CHOSEN_PORT="$(pick_free_port "$REQUESTED_PORT")"; then
  printf '\n[serve] 8877~8999 모두 사용 중입니다. PORT를 지정하세요. 예: PORT=9100 npm run dev\n\n' >&2
  exit 1
fi

if [ "$CHOSEN_PORT" != "$REQUESTED_PORT" ]; then
  printf '\n[serve] 포트 %s(은)는 사용 중 → %s(으)로 띄웁니다. (또는 먼저 켜둔 python 서버를 Ctrl+C로 종료)\n' \
    "$REQUESTED_PORT" "$CHOSEN_PORT"
fi
PORT="$CHOSEN_PORT"
export PORT

printf '\n'
printf '  Seeday — 브라우저 주소 (이 터미널이 서빙하는 주소: http://127.0.0.1:%s)\n' "$PORT"
printf '\n'
printf '    %s  %s\n' "components  " "http://127.0.0.1:${PORT}/viewer.html"
printf '    %s  %s\n' "6-1 일정     " "http://127.0.0.1:${PORT}/viewer-schedule-record-6-1.html"
printf '    %s  %s\n' "토큰        " "http://127.0.0.1:${PORT}/design-tokens-preview.html"
printf '\n'
printf '  (자동으로 브라우저: ./scripts/open.sh 또는 PORT=%s ./scripts/open.sh schedule6)\n' "$PORT"
printf '  서버 끄기: 이 터미널에서 Ctrl+C\n\n'

BIND_ARGS=()
if python3 -m http.server --help 2>&1 | grep -q -- '--bind'; then
  BIND_ARGS=(--bind 127.0.0.1)
fi

exec python3 -m http.server "$PORT" "${BIND_ARGS[@]}"
