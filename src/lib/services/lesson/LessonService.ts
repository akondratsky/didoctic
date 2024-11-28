import { inject, injectable } from 'inversify';
import { DI } from '$lib/di/injectables';
import type { ILessonProvider, ILessonService } from '$lib/interfaces';
import type { ILesson } from '$lib/entities';

@injectable()
export class LessonService implements ILessonService {
  constructor(
    @inject(DI.LessonProvider) private lessonProvider: ILessonProvider,
  ) {}

  public async createLesson(
    lesson: Omit<ILesson, 'id'>,
  ): Promise<ILesson['id']> {
    return this.lessonProvider.createLesson(lesson);
  }

  public async getLessonById(id: ILesson['id']): Promise<ILesson> {
    return this.lessonProvider.getLessonById(id);
  }

  public async updateLesson(lesson: ILesson): Promise<void> {
    return this.lessonProvider.updateLesson(lesson);
  }

  public async deleteLesson(id: ILesson['id']): Promise<void> {
    return this.lessonProvider.deleteLesson(id);
  }
}
