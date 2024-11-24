import type { ISearchResult } from '$lib/entities/ISearchResult';

export interface ISearchService {
  getAllMaterials(): Promise<ISearchResult[]>;
}
