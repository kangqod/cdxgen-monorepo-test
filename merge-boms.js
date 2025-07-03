const fs = require("fs");

const bom1 = JSON.parse(fs.readFileSync("sbom-ui.json", "utf-8"));
const bom2 = JSON.parse(fs.readFileSync("sbom-web.json", "utf-8"));

const combinedComponents = [
  ...(bom1.components || []),
  ...(bom2.components || []),
];

const uniqueComponents = [];
const seen = new Set();

for (const comp of combinedComponents) {
  const key = `${comp.name}@${comp.version}`;
  if (!seen.has(key)) {
    seen.add(key);
    uniqueComponents.push(comp);
  }
}

const mergedBom = {
  bomFormat: "CycloneDX",
  specVersion: "1.5",
  version: 1,
  components: uniqueComponents
};

fs.writeFileSync("sbom-merged.json", JSON.stringify(mergedBom, null, 2));

console.log("✅ SBOM Merge Completed → sbom-merged.json");
