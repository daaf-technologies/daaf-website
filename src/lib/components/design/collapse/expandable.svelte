<script lang="ts">
	import { Plus } from '$lib/assets/icons';
	import Minus from '$lib/assets/icons/minus.svelte';

	let open = $state(false);

	let { id, title, children } = $props();
</script>

<div>
	<div class="collapse-wrapper">
		<button class="collapse-header" onclick={() => (open = !open)}>
			<div>
				{id}. {title}
			</div>

			<div class="icon" class:open>
				{#if !open}
					<Plus />
				{:else}
					<Minus />
				{/if}
			</div>
		</button>

		<div class="collapse-body" class:open>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.collapse-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;
		border-bottom: 1px solid #21231e1a;
	}
	.collapse-header {
		cursor: pointer;
		color: #21231e;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.collapse-body {
		color: #51636f;
		max-height: 0;
		padding-bottom: 0;
		overflow: hidden;
		pointer-events: none;
		opacity: 0;
		transform: translateY(-10px);
		transition:
			max-height 300ms ease,
			opacity 300ms ease,
			transform 300ms ease,
			padding-bottom 300ms ease;
	}

	.collapse-body.open {
		max-height: 400px;
		padding-bottom: 24px;
		pointer-events: auto;
		opacity: 1;
		transform: translateY(0);
	}

	.icon {
		transform: rotate(-180deg);
		transition: transform 150ms ease;
	}

	.icon.open {
		transform: rotate(0deg);
		transition: transform 200ms ease;
	}
</style>
