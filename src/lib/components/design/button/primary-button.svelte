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
		position: relative;
		z-index: 0;
		cursor: pointer;
		color: #fff;
		padding: 8px 16px;
		border-radius: 16px;
		background: #21231e;
		border: 1.5px solid #21231e;
		transition: scale 400ms ease-in-out;
	}

	button[disabled],
	button[aria-disabled='true'] {
		opacity: 0.5;
		cursor: not-allowed;
	}

	button::after {
		content: '';
		z-index: -1;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #21231e;
		inset: 0;
		border-radius: inherit;
		transition: background 400ms ease-in-out;
	}

	button::before {
		content: '';
		background: linear-gradient(45deg, #21221f, #8d8d8d42, #4b4b4b, #21221f);
		position: absolute;
		top: -2px;
		left: -2px;
		background-size: 400%;
		z-index: -1;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		filter: blur(8px);
		animation: glowing 20s linear infinite;
		transition: opacity 400ms ease-in-out;
		border-radius: inherit;
		opacity: 0;
	}

	@keyframes glowing {
		0% {
			background-position: 0 0;
		}

		50% {
			background-position: 400% 0;
		}

		100% {
			background-position: 0 0;
		}
	}

	button:hover::after {
		background: transparent;
	}

	button:hover::before {
		opacity: 1;
	}

	button:hover {
		scale: 1.05;
	}
</style>
