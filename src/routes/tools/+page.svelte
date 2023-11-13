<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Lottie from '$lib/components/lottie.svelte';
	import { onMount } from 'svelte';

	const lottieAnimation =
		'https://lottie.host/25c7b2ab-089e-4afc-b765-f0089d211b61/71Hs6Adp0g.json';
</script>

<Hero title="Tools" showRobi={false} />
<div class="flex flex-col-reverse lg:flex-row gap-8 justify-between">
	<p class="lg:max-w-xl">
		In a bustling metropolis where every circuit hums with urgency, there exists a curious robot
		faced with an extraordinary choice. "The Short Way," a mesmerizing 3D animated short, unveils
		the tale of this unique automaton at a crossroads. Tasked with a mission, the robot stands
		before a pivotal decision: a choice between the direct route, paved with certainty but laden
		with challenges, or the mysterious allure of the shortcut, promising brevity but cloaked in
		uncertainty. As gears whir and neon-lit paths beckon, the story unfolds, delving into the depths
		of decision-making and the essence of the journey itself.
	</p>
	<div class="w-1/2 lg:w-full lg:max-w-sm mx-auto">
		<Lottie animationData={lottieAnimation} />
	</div>
</div>
