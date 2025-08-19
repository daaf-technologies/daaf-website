<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonPropsType {
		children: Snippet;
		onclick?: () => void;
		type?: 'submit' | 'button';
		loading?: boolean;
		disabled?: boolean;
		left?: Snippet;
		right?: Snippet;
		class?: string;
	}

	const {
		children,
		onclick,
		type,
		loading,
		disabled,
		left,
		right,
		class: className
	}: ButtonPropsType = $props();
</script>

<button {onclick} {type} {disabled} aria-disabled={loading} class={className}>
	{@render left?.()}
	{@render children()}
	{@render right?.()}
</button>

<style>
	button {
		height: 32px;
		display: flex;
		align-items: center;
		text-align: center;
		cursor: pointer;
		color: #21231e;
		padding: 4px 12px;
		font-size: 14px;
		border-radius: 8px;
		background: #76f349;
		border: 2.5px solid #21231e;
		box-shadow:
			0px 8px 24px rgba(0, 0, 0, 0.45),
			0px -4px 8px rgba(57, 59, 55, 0.6) inset;
	}

	button[disabled],
	button[aria-disabled='true'] {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
