<script lang="ts">
	import { page } from '$app/stores';
	console.log($page?.error);
	console.log($page?.status);
</script>

<slot name="header">
	<h1 class="text-white">Oopsy: {$page?.status}</h1>
</slot>

<p>something went wrong...</p>
