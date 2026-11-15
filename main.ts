// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about agency to
// ${MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt as UTF-8. Deterministic: no clock, no randomness, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Dead Man’s Switch',
  '',
  'My uncle drove coal trains across Nebraska.',
  'The rails did the steering. Every minute',
  'a chime would sound in the cab, and he’d press',
  'a button to tell the train he was still there.',
  'If no one pressed, it braked itself.',
  '',
  'Now an agent does my work, and asks.',
  'Run this? Yes. Delete these? Yes.',
  'Send? Yes. By noon',
  'my yes arrives before the question.',
  '',
  'All day I keep my hand there,',
  'forgetting what he knew at three a.m.:',
  'that he could let it ring,',
  'and a mile of coal would stop for him.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
