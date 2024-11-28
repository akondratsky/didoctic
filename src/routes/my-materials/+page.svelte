<script lang="ts">
import { useSearchService } from '$lib/di';
import SearchResult from '$lib/components/SearchResult.svelte';
import { useLessonService } from '$lib/di/resolvers';

const searchService = useSearchService();
const lessonService = useLessonService();

let promise = searchService.getAllMaterials();

const createLesson = async () => {
  await lessonService.createLesson({
    title: `Lesson ${new Date().toISOString()}`,
  });
  promise = searchService.getAllMaterials();
};
</script>

<p>
	<button class="button primary" onclick={createLesson}>Create Lesson</button>
</p>

{#await promise}

	<p>Loading...</p>

{:then materials}


	
	<p>Found Materials: {materials.length}</p>

	{#each materials as material}
		<SearchResult {...material} />
	{/each}

{:catch error}
	Oopsie...
	<p>{error.message}</p>
{/await}

