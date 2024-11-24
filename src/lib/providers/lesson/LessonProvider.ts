import { injectable } from 'inversify';
import type { ILesson } from '$lib/entities';
import type { ILessonProvider } from '$lib/interfaces';

@injectable()
export class LessonProvider implements ILessonProvider {
  public async createLesson(lesson: Omit<ILesson, 'id'>): Promise<ILesson> {
    throw new Error('Method not implemented.');
  }

  public async updateLesson(lesson: ILesson): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async deleteLesson(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async getLessonById(id: number): Promise<ILesson> {
    throw new Error('Method not implemented.');
  }
}
