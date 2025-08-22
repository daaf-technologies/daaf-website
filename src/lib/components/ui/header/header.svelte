<script lang="ts">
	import { goto } from '$app/navigation';
	import { DAFF, Dubai, UK } from '$lib/assets/icons';
	import Button from '$lib/components/design/button';
	import Dropdown from '$lib/components/design/dropdown';

	let { minimal, className }: { minimal?: boolean; className?: string } = $props();

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

<div class={`${className} header`}>
	<span class="logo">
		<DAFF />
	</span>
	<div class="nav">
		{#if !minimal}
			<a href="*" class="about">About us</a>
			<Dropdown variant="primary" {options} {selectLanguage} {value} />
		{/if}
		<Button variant="secondary" onclick={() => goto('/contact-us')}>Contact us</Button>
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
		gap: 200px;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		cursor: pointer;
	}
	.nav {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.about {
		font-size: 14px;
		cursor: pointer;
	}
</style>
