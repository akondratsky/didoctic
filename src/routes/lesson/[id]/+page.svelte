<script lang="ts">
import { useLessonService } from '$lib/di/resolvers';
import type { PageData } from './$types';

const { data }: { data: PageData } = $props();

const lessonService = useLessonService();

const promise = lessonService.getLessonById(data.lessonId);
</script>

{#await promise}
  <p>Loading...</p>
{:then lesson}
  <h2>{lesson.title}</h2>
  <p>EDIT LESSON</p>
{:catch error}
  <p>{error.message}</p>
{/await}