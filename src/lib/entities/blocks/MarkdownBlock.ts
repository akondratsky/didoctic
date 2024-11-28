import type { IBlock } from '$lib/entities';

export type MarkdownBlock = IBlock<{
  text: string;
}>;
