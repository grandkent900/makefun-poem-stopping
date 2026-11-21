import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `All day the engine asked for yes.
I kept my hand on the brake
and did not give it.

That was the work:
not the going — the staying.
One palm against the door,
the whole road waiting
behind a single no.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
