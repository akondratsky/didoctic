import { api } from '$convex/api';
import { convex } from '$lib/providers/convex';
import { MaterialType, type ISearchResult } from '$lib/entities';
import type { ISearchProvider } from '$lib/interfaces';

export class SearchProvider implements ISearchProvider {
  public async getAllMaterials(): Promise<ISearchResult[]> {
    const lessons = await convex.query(api.lessons.getAll);
    return lessons.map((lesson) => ({
      id: lesson._id,
      title: lesson.title,
      type: MaterialType.Lesson,
    }));
  }
}
