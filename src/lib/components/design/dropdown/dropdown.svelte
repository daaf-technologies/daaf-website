<script lang="ts">
	import { type Component } from 'svelte';
	import DropdownAlternate from './dropdown-alternate.svelte';
	import DropdownBasic from './dropdown-basic.svelte';

	interface DropdownPropsType {
		options: {
			icon: Component;
			label: string;
			value: string;
		}[];
		selectLanguage: (lang: string) => void;
		value: string;
		icon?: Component;
	}

	let { options, selectLanguage, value, icon }: DropdownPropsType = $props();
</script>

{#if icon}
	<DropdownAlternate {options} {selectLanguage} {value} {icon} />
{:else}
	<DropdownBasic {options} {selectLanguage} {value} />
{/if}
