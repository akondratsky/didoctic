import type { ISearchResult } from '$lib/entities';

export interface ISearchService {
  getAllMaterials(): Promise<ISearchResult[]>;
}
