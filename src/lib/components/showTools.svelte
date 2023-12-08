<script lang="ts">
	import { tools } from '$lib/data/tools';
	import ToolCard from './toolCard.svelte';
</script>

<section class="lg:grid lg:grid-cols-12">
	<div class="lg:col-start-2 lg:col-end-10">
		{#each tools as tool, i (tool.id)}
			<ToolCard {tool} {i} />
		{/each}
	</div>
</section>
