import { inject, injectable } from 'inversify';
import { DI } from '$lib/di/injectables';
import type { ILessonProvider, ILessonService } from '$lib/interfaces';
import type { ILesson } from '$lib/entities';

@injectable()
export class LessonService implements ILessonService {
  constructor(
    @inject(DI.LessonProvider) private lessonProvider: ILessonProvider,
  ) {}

  async createLesson(lesson: Omit<ILesson, 'id'>): Promise<ILesson> {
    return this.lessonProvider.createLesson(lesson);
  }

  async getLessonById(id: number): Promise<ILesson> {
    return this.lessonProvider.getLessonById(id);
  }

  async updateLesson(lesson: ILesson): Promise<void> {
    return this.lessonProvider.updateLesson(lesson);
  }

  async deleteLesson(id: number): Promise<void> {
    return this.lessonProvider.deleteLesson(id);
  }
}
