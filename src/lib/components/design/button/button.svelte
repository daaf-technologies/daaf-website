<script lang="ts">
	import type { Snippet } from 'svelte';
	import PrimaryButton from './primary-button.svelte';
	import SecondaryButton from './secondary-button.svelte';

	interface ButtonPropsType {
		children: Snippet;
		onclick?: () => void;
		type?: 'submit' | 'button';
		variant: 'primary' | 'secondary';
		loading?: boolean;
		disabled?: boolean;
		left?: Snippet;
		right?: Snippet;
		class?: string;
	}

	const {
		children,
		onclick,
		type = 'button',
		variant = 'primary',
		loading,
		disabled,
		left,
		right,
		class: className
	}: ButtonPropsType = $props();
</script>

{#if variant === 'primary'}
	<PrimaryButton {disabled} {loading} {onclick} {type} {left} {right} class={className}>
		{@render children()}
	</PrimaryButton>
{:else}
	<SecondaryButton {disabled} {loading} {onclick} {type} {left} {right} class={className}>
		{@render children()}
	</SecondaryButton>
{/if}
