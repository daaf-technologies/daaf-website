<script lang="ts">
	import PrimaryCollapse from './primary-collapse';
	import SecondaryCollapse from './secondary-collapse';
	interface CollapseType {
		variant: 'primary' | 'secondary';
	}

	const { variant }: CollapseType = $props();
</script>

{#if variant === 'primary'}
	<PrimaryCollapse />
{/if}

{#if variant === 'secondary'}
	<SecondaryCollapse />
{/if}
