<script lang="ts">
	import { navItems } from '$lib/data/nav';
	import { menu } from '$lib/stores/menu';
	import Burger from './burger.svelte';
	import { fly } from 'svelte/transition';
	let innerWidth = 0;

	$: innerWidth < 1024 ? ($menu = false) : null;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth === 0}
	<div class="h-12 min-h-full" />
{:else if innerWidth < 1024}
	<Burger />
	{#if $menu}
		<nav
			class="bg-gray-950 h-screen w-screen z-10 flex items-center justify-center"
			in:fly={{ x: 200, duration: 400, opacity: 0 }}
			out:fly={{ x: 200, duration: 200, opacity: 0 }}
		>
			<ul>
				{#each navItems as item}
					<li>
						<a href={item.url} on:click={() => ($menu = !$menu)}>{item.title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
{:else}
	<nav class="w-full flex py-4 justify-between h-12">
		{#each navItems as item}
			<a class="flex-1" href={item.url}>{item.title}</a>
		{/each}
	</nav>
{/if}
