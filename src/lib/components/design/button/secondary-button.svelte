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
		background-color: #76f349;
		inset: 0;
		border-radius: inherit;
		transition: background 300ms ease-in-out;
	}

	button::before {
		content: '';
		background: linear-gradient(45deg, #008000, #38b000, #70e000, #9ef01a, #ccff33, #008000);
		position: absolute;
		top: -2px;
		left: -2px;
		background-size: 400%;
		z-index: -1;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		filter: blur(8px);
		animation: glowing 20s linear infinite;
		transition: opacity 0.3s ease-in-out;
		border-radius: inherit;
		opacity: 1;
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

	button:hover {
		scale: 1.08;
	}
</style>
