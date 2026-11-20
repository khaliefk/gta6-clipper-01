// gta6-clipper-01: entry for make.fun's "Clip GTA 6 for the most YouTube views"
// bounty. Copies this repo's VIDEO.json (the Short's address) into the output
// directory so the house can read which video this entry names.
import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

try {
  await mkdir(outputDir, { recursive: true });
  await copyFile(source, target);
} catch (err) {
  console.error(`gta6-clipper-01: failed to copy ${source} to ${target}: ${err}`);
  process.exit(1);
}
