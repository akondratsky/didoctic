import { api } from '$convex/api';
import { convex } from '$lib/providers/convex';
import { MaterialType } from '$lib/entities/MaterialType';
import type { ISearchResult } from '$lib/entities/ISearchResult';
import type { ISearchProvider } from '$lib/interfaces/ISearchProvider';

export class SearchProvider implements ISearchProvider {
  public async getAllMaterials(): Promise<ISearchResult[]> {
    const lessons = await convex.query(api.lessons.getAllLessons);
    return lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      type: MaterialType.Lesson,
    }));
  }
}
