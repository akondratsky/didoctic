import type { ILesson } from '$lib/entities';

export interface ILessonService {
  createLesson(lesson: Omit<ILesson, 'id'>): Promise<ILesson['id']>;

  getLessonById(id: ILesson['id']): Promise<ILesson>;

  updateLesson(lesson: ILesson): Promise<void>;

  deleteLesson(id: ILesson['id']): Promise<void>;
}
