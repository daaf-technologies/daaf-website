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
		cursor: pointer;
		color: #fff;
		padding: 8px 16px;
		border-radius: 16px;
		background: #21231e;
		border: 1.5px solid #21231e;
		/* box-shadow:
			0 0 0 2.76px #8d8d8d42,
			inset 0 0 0 2.76px #4b4b4b,
			inset 0 -2.76px 2.76px 0 #21221f; */
		box-shadow:
			0 0 0 2.76px #8d8d8d42,
			inset 0 0 0 2.76px #4b4b4b,
			inset 0 -2.76px 2.76px 0 #21221f;
	}

	button[disabled],
	button[aria-disabled='true'] {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
