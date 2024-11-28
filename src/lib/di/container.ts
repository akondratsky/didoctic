import { Container } from 'inversify';
import { DI } from './injectables';

import { SearchProvider } from '$lib/providers/search';
import { LessonProvider } from '$lib/providers/lesson';
import type {
  ISearchService,
  ISearchProvider,
  ILessonProvider,
  ILessonService,
} from '$lib/interfaces';
import { SearchService } from '$lib/services/search';
import { LessonService } from '$lib/services/lesson';

export const container = new Container();

container.bind<ISearchProvider>(DI.SearchProvider).to(SearchProvider);
container.bind<ISearchService>(DI.SearchService).to(SearchService);
container.bind<ILessonProvider>(DI.LessonProvider).to(LessonProvider);
container.bind<ILessonService>(DI.LessonService).to(LessonService);
