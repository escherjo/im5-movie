<script lang="ts">
	import Robi from '$lib/assets/robi.png';
	import Eye from '$lib/assets/eye.png';
	export let title: string;
	export let showRobi: boolean;

	let eyesTop = '62px';
	let eyeLeft: HTMLImageElement;
	let eyeRight: HTMLImageElement;
	let anchor: HTMLImageElement;

	const handleMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;

		const rekt = anchor.getBoundingClientRect();
		const anchorX = rekt.left + rekt.width / 2;
		const anchorY = rekt.top + rekt.height / 2;

		const angleDeg = eyeAngle(anchorX, anchorY, clientX, clientY);

		eyeLeft.style.transform = `rotate(${angleDeg}deg)`;
		eyeRight.style.transform = `rotate(${angleDeg}deg)`;
	};

	const eyeAngle = (cx: number, cy: number, ex: number, ey: number) => {
		const dy = ey - cy;
		const dx = ex - cx;
		const rad = Math.atan2(dy, dx);
		const deg = rad * (180 / Math.PI);
		return deg;
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section class="flex justify-between items-end border-b-2 border-gray-50 p-0 pb-12 relative my-12">
	<h1 class="text-9xl font-oswald font-black">The Short Way.</h1>
	<div class="absolute w-48 right-0">
		<img src={Robi} alt="Robi" class="w-48" bind:this={anchor} />
		<img
			src={Eye}
			alt=""
			class="absolute w-4"
			bind:this={eyeLeft}
			style:top={eyesTop}
			style="left:  85px"
		/>
		<img
			src={Eye}
			alt=""
			class="absolute w-4"
			bind:this={eyeRight}
			style:top={eyesTop}
			style="left: 124px"
		/>
	</div>
</section>
