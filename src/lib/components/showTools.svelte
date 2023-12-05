<script lang="ts">
	import { tools } from '$lib/data/tools';
	import ToolCard from './toolCard.svelte';

	// create an inView function that takes an element and returns a boolean
	// indicating whether or not that element is in inView
</script>

<section class="grid grid-cols-12">
	<div class="col-start-2 col-end-10">
		{#each tools as tool, i (tool.id)}
			<ToolCard {tool} {i} />
		{/each}
	</div>
</section>
