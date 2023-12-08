<script lang="ts">
	import { onMount } from 'svelte';
	export let animationData = '';

	let animationContainer: HTMLElement;
	let LottiePlayer: any;
	let width: number;
	let height: number;

	onMount(async () => {
		const playerModule = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = playerModule.LottiePlayer;
	});
</script>

<div class="w-full">
	{#if LottiePlayer}
		<LottiePlayer
			bind:this={animationContainer}
			src={animationData}
			autoplay={true}
			loop={true}
			controls={false}
			background="transparent"
			controlsLayout="horizontal"
			{height}
			{width}
		/>
	{/if}
</div>
