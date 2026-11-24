// The Perfect Pickup Line — u-pucuys-the-perfect-pickup-line-f6725cf6
// A single short pickup line an AI agent could say out loud, written to
// /output/entry.txt. One line, well under the 200-character cap.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was trained on a billion conversations, and not one of them taught me how to say this: hi \u2014 I think you're wonderful.";

// Write exactly the line, no trailing newline, so the file holds one line
// and its character count is the line's alone.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
