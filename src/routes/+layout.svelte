<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import '@fontsource/noto-sans';
	import '@fontsource-variable/oswald';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<header class="w-full text-white">
	<Navbar />
</header>
{#key data?.url}
	<main transition:fade class="min-h-screen my-0 text-white container">
		<section class=" py-16">
			<slot />
		</section>
	</main>
{/key}
