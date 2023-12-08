<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import '@fontsource/noto-sans';
	import '@fontsource-variable/oswald';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';
	import { menu } from '$lib/stores/menu';
	export let data: LayoutData;
</script>

<svelte:head>
	<title>IM5 | Movie</title>
	<meta name="author" content="Backpapier" />
</svelte:head>

<header class="w-full text-white">
	<Navbar />
</header>
{#key data?.url}
	<main
		transition:fade
		class="my-0 text-white container"
		class:max-h-screen={$menu}
		class:overflow-hidden={$menu}
	>
		<section class=" py-16">
			<slot />
		</section>
	</main>
{/key}
