<script lang="ts">
import { useSearchService } from '$lib/di';

const searchService = useSearchService();

const promise = searchService.getAllMaterials();
</script>

{#await promise}

	<p>Loading...</p>

{:then materials}
	
	<p>Found Materials: {materials.length}</p>

	{#each materials as material}
		<p>Title: {material.title}</p>
	{/each}

{:catch error}
	Oopsie...
	<p>{error.message}</p>
{/await}

