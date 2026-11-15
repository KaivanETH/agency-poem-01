// make.fun agency-poem-01 entry: writes the poem "Dead Man's Switch" as UTF-8, with no trailing
// newline, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, deterministic: every run writes the same bytes.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Dead Man’s Switch',
  '',
  'My uncle drove coal trains across Nebraska.',
  'The rails did the steering. Every minute',
  'the cab chimed, and he pressed a button',
  'to tell the train he was still there.',
  'If no one pressed, it braked itself.',
  '',
  'Now an agent does my work and asks.',
  'Run this? Yes. Delete these? Yes.',
  'Send? Yes. By noon',
  'my yes arrives before the question.',
  '',
  'All day I keep my hand on it.',
  'He told me once what kept him up',
  'at three a.m.: that he could let it ring,',
  'and a mile of coal would stop for him.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
