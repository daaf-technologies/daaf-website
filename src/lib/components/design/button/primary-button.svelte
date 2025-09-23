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
		box-shadow:
			0px 0px 0px 2.76px #8d8d8d42,
			0px 0px 0px 2.76px #4b4b4b inset,
			0px -2.76px 2.76px 0px #21221f inset;
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
		box-shadow:
			0px 0px 0px 2.76px #4b4b4b inset,
			0px -2.76px 2.76px 0px #21221f inset;
		transition: background 400ms ease-in-out;
	}

	button::before {
		content: '';
		background: linear-gradient(
			45deg,
			#434443,
			#3c3c3b,
			#353634,
			#2f302d,
			#292a27,
			#242522,
			#21221f,
			#434443
		);
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
