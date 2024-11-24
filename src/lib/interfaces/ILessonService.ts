import type { ILesson } from '$lib/entities';

export interface ILessonService {
	createLesson(lesson: Omit<ILesson, 'id'>): Promise<ILesson>;

	getLessonById(id: number): Promise<ILesson>;

	updateLesson(lesson: ILesson): Promise<void>;

	deleteLesson(id: number): Promise<void>;
}
