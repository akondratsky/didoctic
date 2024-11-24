import type { IBlock } from '$lib/entities/IBlock';

export type MarkdownBlock = IBlock<{
	text: string;
}>;
