import type { ISearchResult } from '$lib/entities/ISearchResult';

export interface ISearchProvider {
  getAllMaterials(): Promise<ISearchResult[]>;
}
