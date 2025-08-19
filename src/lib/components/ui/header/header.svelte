<script lang="ts">
	import { DAFF, Dubai, UK } from '$lib/assets/icons';
	import Button from '$lib/components/design/button';
	import Dropdown from '$lib/components/design/dropdown';

	let options = [
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
	let value = $state('En');
	function selectLanguage(lang: string) {
		value = lang;
	}
</script>

<div class="header">
	<span class="logo">
		<DAFF />
	</span>
	<div class="nav">
		<p class="about">About us</p>
		<Dropdown variant="primary" {options} {selectLanguage} {value} />
		<Button variant="secondary">Contact us</Button>
	</div>
</div>

<style>
	.header {
		background-color: #21231e;
		color: #ffffff;
		padding: 16px 30px;
		border: 2px solid #696969;
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.about {
		font-size: 14px;
	}
</style>
