<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PropType {
		isOpen: boolean;
		children: Snippet;
	}

	let { isOpen = false, children }: PropType = $props();
</script>

{#if isOpen}
	<div class="modal-container">
		<div class="modal-content">
			{@render children()}
		</div>
	</div>
{/if}

<style>
	.modal-container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 40;
		backdrop-filter: blur(90px);
	}

	.modal-content {
		width: 430px;
		height: 250px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		padding: 24px 42px;
		border-radius: 16px;
	}
</style>
