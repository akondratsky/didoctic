import type { ILesson } from '$lib/entities';

export interface ICourse {
  id: string;
  title: string;
  description: string;
  lessons: ILesson[];
}
