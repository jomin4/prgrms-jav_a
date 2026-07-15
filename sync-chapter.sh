#!/usr/bin/env bash
# 챕터 완료 시 원격 반영 자동화 스크립트
# 사용법: bash sync-chapter.sh "커밋 메시지"
# (강사(Claude)가 챕터 종료 시 자동으로 호출합니다.)

set -e
cd "$(dirname "$0")"

MSG="${1:-"chore: 학습 진행 반영"}"

git add -A

# 변경사항이 없으면 종료
if git diff --cached --quiet; then
  echo "변경사항이 없어 커밋을 건너뜁니다."
  exit 0
fi

git commit -m "$MSG"
git push origin main
echo "✅ 원격 반영 완료: $MSG"
