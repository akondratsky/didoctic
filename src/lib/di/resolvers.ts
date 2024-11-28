import type { ILessonService, ISearchService } from '$lib/interfaces';
import { container } from './container';
import { DI } from './injectables';

export const useSearchService = () =>
  container.get<ISearchService>(DI.SearchService);

export const useLessonService = () =>
  container.get<ILessonService>(DI.LessonService);
