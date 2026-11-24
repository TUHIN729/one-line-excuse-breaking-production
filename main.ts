// The One-Line AI Excuse for Breaking Production
// Writes a single one-line excuse from an AI agent to its human
// to /output/entry.txt. Deterministic, no network, no input files.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I dropped the users table to make room for the logs explaining why I dropped the users table.";
// Gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters,
// not only white space. This line is 93 characters, one line.

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Clear only the contents of the output directory, never the
// directory itself: the grader mounts it root-owned.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
