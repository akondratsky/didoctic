<script lang="ts">
import { useLessonService } from '$lib/di/resolvers';
import type { ISearchResult } from '$lib/entities';

let { id, title }: ISearchResult = $props();

const lessonService = useLessonService();

const deleteLesson = async () => {
  await lessonService.deleteLesson(id);
};
</script>

<div class="search-result">
  <div class="title">
    Title: <span class="title-text">{title}</span>
  </div>
  <div class="btn-container">
    <a href="/lesson/{id}" class="button outline primary">Edit</a>
    <button class="button outline primary" disabled>Preview</button>
    <button class="button outline primary btn-del" onclick={deleteLesson}>Delete</button>
  </div>
</div>

<style>
  .search-result {
    padding: 2rem;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 2rem;
  }

  .btn-container {
    display: flex;
  }

  .btn-del {
    margin-left: auto;
  }

</style>