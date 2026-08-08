import { Block } from 'notion-types';

// recordMap.block entries are wrapped in one or more layers of { value }
// (with varying sibling keys like `role` or `spaceId` depending on the
// block). Keep descending into `.value` until we reach an object with a
// `type` field, which only the actual Block has.
export function unwrapBlock(entry: unknown): Block | undefined {
  let current = entry;
  while (
    current &&
    typeof current === 'object' &&
    !('type' in current) &&
    'value' in current
  ) {
    current = (current as { value: unknown }).value;
  }
  return current as Block | undefined;
}
