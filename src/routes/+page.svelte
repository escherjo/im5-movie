<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Vimeo from '$lib/components/vimeo.svelte';
</script>

<Hero title="The Short Way." showRobi={true} />
<article class="flex flex-col gap-8">
	<div class="col-span-2">
		<Vimeo videoID={217499569} />
	</div>
	<div class="flex flex-col lg:flex-row gap-8">
		<h2 class="lg:max-w-sm w-full text-4xl uppercase font-display">About the movie</h2>

		<p class="lg:max-w-xl">
			In a bustling metropolis where every circuit hums with urgency, there exists a curious robot
			faced with an extraordinary choice. "The Short Way," a mesmerizing 3D animated short, unveils
			the tale of this unique automaton at a crossroads. Tasked with a mission, the robot stands
			before a pivotal decision: a choice between the direct route, paved with certainty but laden
			with challenges, or the mysterious allure of the shortcut, promising brevity but cloaked in
			uncertainty. As gears whir and neon-lit paths beckon, the story unfolds, delving into the
			depths of decision-making and the essence of the journey itself.
		</p>
	</div>
</article>
