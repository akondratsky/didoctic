import type { BlockType } from './BlockType';

export interface IBlock<T> {
	type: BlockType;
	content: T;
}
