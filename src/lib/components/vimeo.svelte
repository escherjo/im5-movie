<script lang="ts">
	import Player from '@vimeo/player';
	import { onMount } from 'svelte';

	let player: Player;
	let playerContainer: HTMLElement;
	export let videoID: number;

	let playerWidth = 640;

	onMount(() => {
		playerWidth = playerContainer.getBoundingClientRect().width;
		console.log(playerWidth);
		player = new Player(playerContainer, {
			id: videoID
		});
	});
</script>

<div>
	<div bind:this={playerContainer} class="w-full embed-container" />
</div>

<style>
	.embed-container {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		max-width: 100%;
	}
	:global(.embed-container iframe) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
