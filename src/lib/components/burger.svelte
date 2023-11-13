<script lang="ts">
	import { menu } from '$lib/stores/menu';
</script>

<div class="fixed top-4 right-4">
	<button class="relative w-8 h-6" on:click={() => ($menu = !$menu)}>
		<span
			class="absolute w-full h-0.5 bg-gray-50 top-0 left-0 transition duration-150"
			class:-translate-x-full={$menu}
			class:opacity-0={$menu}
			class:delay-75={!$menu}
		/>
		<span
			class="absolute w-full h-0.5 bg-gray-50 top-1/2 left-0 -translate-y-1/2 transition duration-150"
			class:rotate-45={$menu}
			class:delay-75={$menu}
		/>
		<span
			class="absolute w-full h-0.5 bg-gray-50 top-1/2 left-0 -translate-y-1/2 transition duration-150"
			class:-rotate-45={$menu}
			class:delay-75={$menu}
		/>
		<span
			class="absolute w-full h-0.5 bg-gray-50 bottom-0 left-0 transition duration-150"
			class:translate-x-full={$menu}
			class:opacity-0={$menu}
			class:delay-75={!$menu}
		/>
	</button>
</div>
