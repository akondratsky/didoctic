import { Container } from 'inversify';
import { DI } from './injectables';

import { SearchProvider } from '$lib/providers/search';
import type { ISearchService, ISearchProvider } from '$lib/interfaces';
import { SearchService } from '$lib/services/search';

export const container = new Container();

container.bind<ISearchProvider>(DI.SearchProvider).to(SearchProvider);
container.bind<ISearchService>(DI.SearchService).to(SearchService);
