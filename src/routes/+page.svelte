<script lang="ts">
	import Dropdown from '$lib/components/design/dropdown';
	import { Dubai, Globe, UK } from '$lib/assets/icons';

	let secondaryOptions = [
		{
			icon: UK,
			label: 'English',
			value: 'English'
		},
		{
			icon: Dubai,
			label: 'Arabic',
			value: 'Arabic'
		}
	];

	let secondaryValue = $state('English');

	function secondarySelectLanguage(lang: string) {
		secondaryValue = lang;
	}

	let primaryOptions = [
		{
			icon: UK,
			label: 'English',
			value: 'EN'
		},
		{
			icon: Dubai,
			label: 'Arabic',
			value: 'AR'
		}
	];

	let primaryValue = $state('EN');

	function primarySelectLanguage(lang: string) {
		primaryValue = lang;
	}
</script>

{#snippet left()}
	<Globe />
{/snippet}

<div class="flex gap-48 p-60">
	<Dropdown
		options={primaryOptions}
		selectLanguage={primarySelectLanguage}
		value={primaryValue}
		variant="primary"
	/>
	<Dropdown
		options={secondaryOptions}
		selectLanguage={secondarySelectLanguage}
		value={secondaryValue}
		variant="secondary"
		{left}
	/>
</div>

<style>
</style>
