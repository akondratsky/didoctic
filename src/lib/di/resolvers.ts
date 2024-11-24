import type { ISearchService } from '$lib/interfaces';
import { container } from './container';
import { DI } from './injectables';

export const useSearchService = () =>
  container.get<ISearchService>(DI.SearchService);
