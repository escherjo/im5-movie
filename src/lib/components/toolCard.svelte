<script lang="ts">
	import type { Tool } from '$lib/data/tools';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	export let tool: Tool;
	export let i: number;

	let isInView: boolean;

	const options: Options = {
		rootMargin: '-100px',
		unobserveOnEnter: true
	};

	const isOdd = (num: number) => num % 2 === 1;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<article
	use:inview={options}
	on:inview_change={handleChange}
	class="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-8 my-4 md:my-8 md:odd:flex-row-reverse relative"
>
	<div
		class="absolute left-0 bottom-0 w-full h-px bg-white transition duration-500 scale-x-0 px-4"
		class:scale-x-100={isInView}
	/>
	<img
		class="transition duration-500"
		class:-translate-x-full={!isInView && isOdd(i)}
		class:translate-x-full={!isInView && !isOdd(i)}
		class:opacity-100={isInView}
		src="https://source.unsplash.com/random/300x300"
		alt="random "
	/>
	<div
		class="transition duration-500 self-start mt-8 lg:mt-0"
		class:translate-x-full={!isInView && isOdd(i)}
		class:-translate-x-full={!isInView && !isOdd(i)}
		class:opacity-100={isInView}
	>
		<a href={tool.url}>
			<h2 class="text-2xl font-display uppercase">
				{tool.title}
			</h2>
		</a>
		<p class="pt-4">{tool.description}</p>
	</div>
</article>
