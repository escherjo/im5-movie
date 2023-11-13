<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import '@fontsource/noto-sans';
	import '@fontsource-variable/oswald';
</script>

<header class="container w-full text-white">
	<Navbar />
</header>
<main class="min-h-screen my-0 text-white container">
	<section class=" py-16">
		<slot />
	</section>
</main>

<style lang="postcss">
</style>
