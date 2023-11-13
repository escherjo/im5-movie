<script lang="ts">
	import { navItems } from '$lib/data/nav';
	import Burger from './burger.svelte';
	let innerWidth = 0;

	$: console.log(innerWidth);
</script>

<svelte:window bind:innerWidth />

{#if innerWidth === 0}
	<p>loading...</p>
{:else if innerWidth < 768}
	<Burger />
	<p>mobile</p>
{:else if innerWidth < 1024}
	<Burger />
	<p>tablet</p>
{:else}
	<nav class="w-full flex py-4 justify-between">
		{#each navItems as item}
			<a class="flex-1" href={item.url}>{item.title}</a>
		{/each}
	</nav>
{/if}
