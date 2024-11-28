import { injectable } from 'inversify';
import { api } from '$convex/api';
import { convex } from '$lib/providers/convex';
import type { ILesson } from '$lib/entities';
import type { ILessonProvider } from '$lib/interfaces';
import type { Id } from '$convex/dataModel';

@injectable()
export class LessonProvider implements ILessonProvider {
  public async createLesson(
    lesson: Omit<ILesson, 'id'>,
  ): Promise<ILesson['id']> {
    return await convex.mutation(api.lessons.createLesson, lesson);
  }

  public async updateLesson(lesson: ILesson): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async deleteLesson(id: ILesson['id']): Promise<void> {
    await convex.mutation(api.lessons.deleteLesson, {
      id: id as Id<'lessons'>,
    });
  }

  public async getLessonById(id: ILesson['id']): Promise<ILesson> {
    const lesson = await convex.query(api.lessons.getById, {
      id: id as Id<'lessons'>,
    });
    if (!lesson) {
      throw new Error('Lesson not found');
    }
    return {
      id: lesson._id,
      title: lesson.title,
    };
  }
}
