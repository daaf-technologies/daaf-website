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
		width: 100%;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		cursor: pointer;
		color: #21231e;
		padding: 4px 12px;
		font-size: 14px;
		border-radius: 8px;
		background: #76f349;
		border: 2.5px solid #21231e;
	}

	button[disabled],
	button[aria-disabled='true'] {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
