<script lang="ts">
	import { type Component, type Snippet } from 'svelte';
	import PrimaryDropdown from './primary-dropdown.svelte';
	import SecondaryDropdown from './secondary-dropdown.svelte';

	interface DropdownPropsType {
		variant: 'primary' | 'secondary';
		options: {
			icon: Component;
			label: string;
			value: string;
		}[];
		selectLanguage: (lang: string) => void;
		value: string;
		left?: Snippet;
		dropdownControlClassname?: string;
		dropdownMenuClassname?: string;
		dropdownItemClassname?: string;
		dropdownClassname?: string;
	}

	let {
		variant,
		options,
		selectLanguage,
		value,
		left,
		dropdownClassname,
		dropdownControlClassname,
		dropdownMenuClassname,
		dropdownItemClassname
	}: DropdownPropsType = $props();
</script>

{#if variant === 'primary'}
	<PrimaryDropdown
		{options}
		{selectLanguage}
		{value}
		{left}
		{dropdownClassname}
		{dropdownControlClassname}
		{dropdownMenuClassname}
		{dropdownItemClassname}
	/>
{/if}

{#if variant === 'secondary'}
	<SecondaryDropdown
		{options}
		{selectLanguage}
		{value}
		{left}
		{dropdownControlClassname}
		{dropdownMenuClassname}
		{dropdownItemClassname}
	/>
{/if}
