import type { ILesson } from '$lib/entities/ILesson';

export interface ICourse {
	id: number;
	title: string;
	description: string;
	lessons: ILesson[];
}
