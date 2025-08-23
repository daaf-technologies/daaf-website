<script lang="ts">
	import { Close, DAFF, Dubai, HamburgerMenu, UK } from '$lib/assets/icons';
	import Arrow from '$lib/assets/icons/arrow.svelte';
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

	let value = $state('EN');

	function selectLanguage(lang: string) {
		value = lang;
	}

	let open = $state(true);

	const toggle = () => (open = !open);
</script>

<div class="header">
	<span class="logo">
		<DAFF />
	</span>
	<div class="nav">
		<a href="*" class="about">About us</a>
		<Dropdown variant="primary" {options} {selectLanguage} {value} />
		<Button variant="secondary">Contact us</Button>
	</div>

	<button class="hamburger" onclick={toggle}>
		{#if !open}
			<HamburgerMenu />
		{:else}
			<Close />
		{/if}
	</button>

	{#if open}
		<div class="mobile-menu">
			<a class="about" href="*">
				<p class="text-base">About us</p>
				<span>
					<Arrow />
				</span>
			</a>
			<Dropdown
				variant="primary"
				{options}
				{selectLanguage}
				{value}
				dropdownMenuClassname="static pb-3"
				dropdownControlClassname="w-full mt-[30px] mb-[12px]"
			/>
			<Button variant="secondary">Contact us</Button>
		</div>
	{/if}
</div>

<style>
	@media (max-width: 768px) {
		.header {
			width: 343px;
		}

		.mobile-menu {
			width: 100%;
			position: absolute;
			top: 72px;
			left: 0;
			padding: 30px 24px;
			border-radius: 20px;
			background-color: #21231e;
		}

		.about {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 16px;
		}

		.nav {
			display: none;
		}
	}

	.header {
		position: relative;
		background-color: #21231e;
		color: #ffffff;
		padding: 16px 30px;
		border: 2px solid #696969;
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-wrap: nowrap;
	}

	@media (min-width: 1024px) {
		.header {
			width: 646px;
		}
		.nav {
			display: flex;
			align-items: center;
			gap: 12px;
		}

		.hamburger {
			display: none;
		}

		.mobile-menu {
			display: none;
		}
	}

	.about {
		font-size: 14px;
	}
</style>
