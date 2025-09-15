<script lang="ts">
	import { goto } from '$app/navigation';

	import Button from '../button/button.svelte';

	let { isOpen = false } = $props();
</script>

{#if isOpen}
	<div class="modal-container">
		<div class="modal-content">
			<p>E-mail sent successfully</p>

			<Button variant="secondary" onclick={() => goto('/')}>Go to home</Button>
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
		background-color: rgba(0, 0, 0, 0.8);
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		background-color: white;
		padding: 40px;
		border-radius: 16px;
	}
</style>
