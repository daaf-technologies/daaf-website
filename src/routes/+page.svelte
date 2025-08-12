<script lang="ts">
	import Dropdown from '$lib/components/design/dropdown';
	import { Dubai, Globe, UK } from '$lib/assets/icons';

	let options = [
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

	let value = $state('English');

	// let options = [
	// 	{
	// 		icon: UK,
	// 		label: 'English',
	// 		value: 'EN'
	// 	},
	// 	{
	// 		icon: Dubai,
	// 		label: 'Arabic',
	// 		value: 'AR'
	// 	}
	// ];

	// let value = $state('EN');

	function selectLanguage(lang: string) {
		value = lang;
	}
</script>

<div class="p-60">
	<Dropdown {options} {selectLanguage} {value} icon={Globe} />
	<!-- <Dropdown {options} {selectLanguage} {value} /> -->
</div>

<style lang="postcss">
</style>
