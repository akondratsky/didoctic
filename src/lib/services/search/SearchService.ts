import { inject, injectable } from 'inversify';
import { DI } from '$lib/di';
import type { ISearchResult } from '$lib/entities';
import type { ISearchProvider, ISearchService } from '$lib/interfaces';

@injectable()
export class SearchService implements ISearchService {
  constructor(
    @inject(DI.SearchProvider) private readonly searchProvider: ISearchProvider,
  ) {}

  public async getAllMaterials(): Promise<ISearchResult[]> {
    return this.searchProvider.getAllMaterials();
  }
}
