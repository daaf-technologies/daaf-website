<script lang="ts">
	import '../app.css';
	// import favicon from '$lib/assets/favicon.svg';
	import favicon from '$lib/assets/images/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
