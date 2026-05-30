import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

mkdirSync(dist, { recursive: true });

for (const item of ["images", "files", "CNAME"]) {
  const source = join(root, item);
  if (existsSync(source)) {
    cpSync(source, join(dist, item), { recursive: true });
  }
}

if (existsSync(join(root, "public", "404.html"))) {
  cpSync(join(root, "public", "404.html"), join(dist, "404.html"));
}

