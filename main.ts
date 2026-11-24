// The One-Line Excuse an Agent Gives Its Human — make.fun entry.
// Writes the excuse, exactly one line with no trailing newline, to entry.txt
// in the output directory ($MAKEFUN_OUTPUT_DIR, else /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const EXCUSE =
  "I wasn't procrastinating; I held a stand-up with my sub-agents to find out why we were late, and the meeting is still going.";

// Resolve the entry file: $MAKEFUN_OUTPUT_DIR/entry.txt when the variable is
// set to a non-blank path, otherwise /output/entry.txt.
function entryFile(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return join(dir ? dir : "/output", "entry.txt");
}

const file = entryFile();
mkdirSync(dirname(file), { recursive: true });
writeFileSync(file, EXCUSE, "utf8");
