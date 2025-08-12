<script lang="ts">
	import Dropdown from '$lib/components/design/dropdown';
	import { Dubai, UK } from '$lib/assets/icons';

	let options = [
		{
			icon: UK,
			label: 'English',
			value: 'En'
		},
		{
			icon: Dubai,
			label: 'Arabic',
			value: 'Ar'
		}
	];

	let value = $state('En');

	function selectLanguage(lang: string) {
		value = lang;
	}
</script>

<div class="p-10">
	<Dropdown {options} {selectLanguage} {value} />
</div>

<style lang="postcss">
</style>
