import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(ROOT, "assets", "figma-icons", "manifest.json");
const outDir = path.join(ROOT, "assets", "figma-icons");

/** @param {string} p */
function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

/** @param {string} file */
function safeJoin(file) {
  // prevent path traversal
  const clean = file.replaceAll("\\", "/").split("/").pop() || file;
  return path.join(outDir, clean);
}

async function main() {
  ensureDir(outDir);
  const manifestRaw = fs.readFileSync(manifestPath, "utf8");
  /** @type {Record<string, string>} */
  const manifest = JSON.parse(manifestRaw);

  const entries = Object.entries(manifest);
  if (entries.length === 0) {
    console.log("manifest is empty:", manifestPath);
    return;
  }

  const results = [];
  for (const [file, url] of entries) {
    const outPath = safeJoin(file);
    const res = await fetch(url);
    if (!res.ok) {
      results.push({ file, ok: false, status: res.status, url });
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(outPath, buf);
    results.push({ file, ok: true, bytes: buf.length });
  }

  const ok = results.filter((r) => r.ok).length;
  const fail = results.length - ok;
  console.log(`downloaded ${ok}/${results.length} icons (${fail} failed)`);
  if (fail > 0) {
    for (const r of results.filter((x) => !x.ok)) {
      console.log(`- FAIL ${r.file} (${r.status}) ${r.url}`);
    }
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

