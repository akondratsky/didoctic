import type { ISearchResult } from '$lib/entities';

export interface ISearchProvider {
  getAllMaterials(): Promise<ISearchResult[]>;
}
