# !bin/bash

# 1. apps/web/package.json 에서 dependencies 만 남기기
# 2. 사용중인 packages/* 모듈의 package.json 에서 dependencies 추가하기
# 3. pnpm-lock.yaml 파일 복사하기
# 4. pnpm dedupe 실행하기
# 5. cdxgen 실행하기
cdxgen -t pnpm -o bom.json --spec-version 1.5

# 결과물
# http://192.168.150.11:8080/projects/4f6094a7-4f7b-44a9-89f4-ba0476f38f3b/components


# --------------------
# project root
# pnpm install --global @cyclonedx/cyclonedx-npm 
# cdxgen -t pnpm -p apps/web -o sbom-web.json --required-only --spec-version 1.5
# cdxgen -t pnpm -p packages/ui -o sbom-ui.json --required-only --spec-version 1.5
# node merge-boms.js 