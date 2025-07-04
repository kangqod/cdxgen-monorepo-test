# cdxgen-monorepo-test

A space for testing CDXGEN in the PNPM monorepo environment.

Within the apps folder, I am developing each product
and would like to run cdxgen on a per-product basis
but it seems that cdxgen extracts based on the monorepo as a whole.

I want to extract only the dependencies for apps/web, apps/web-v2 to bom.json (excluding devDependencies).

> ex) apps/web/sbom-web.json, apps/web-v2/sbom-web-v2.json

> cdxgen -t pnpm -p -o sbom-web.json --required-only --exclude "packages/**" ??

https://github.com/CycloneDX/cdxgen/issues/2020