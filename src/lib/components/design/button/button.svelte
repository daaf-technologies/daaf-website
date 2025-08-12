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

<!-- @component
### Takes in these props

```ts
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

children: Snippet – content inside the button

onclick: function – click handler

type: 'submit' | 'button' – defaults to 'button'

variant: 'primary' | 'secondary' – defines which button style to render

loading: boolean – shows loading state if supported by inner button

disabled: boolean – disables the button

left: Snippet – icon or element on the left of the label

right: Snippet – icon or element on the right of the label

class: string – apply custom styles to the button

Example usage with left/right:

{#snippet leftIcon(color: string)}
    <span>
        <Add />
    </span>
{/snippet}

{#snippet rightIcon(color: string)}
    <span>
        <ArrowRight />
    </span>
{/snippet}

<Button variant="primary" left={leftIcon}>Save</Button>
<Button variant="secondary" right={rightIcon}>Next</Button>
-->
