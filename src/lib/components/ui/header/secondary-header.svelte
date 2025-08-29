<script lang="ts">
	// import { Close, DAFF, Dubai, HamburgerMenu, UK, Arrow } from '$lib/assets/icons';
	import { goto } from '$app/navigation';
	import { DAAF } from '$lib/assets/icons';
	import Button from '$lib/components/design/button';
	// import Dropdown from '$lib/components/design/dropdown';

	let { className }: { className?: string } = $props();

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

	// function selectLanguage(lang: string) {
	// 	value = lang;
	// }

	// let open = $state(false);

	// const toggle = () => (open = !open);
</script>

<div class={`${className} header`}>
	<span class="logo">
		<DAAF />
	</span>

	<div class="nav">
		<Button variant="secondary" onclick={() => goto('/contact-us')}>Contact us</Button>
	</div>
</div>

<style>
	.header {
		position: relative;
		background-color: #21231e;
		color: #ffffff;
		padding: 16px 30px;
		border: 2px solid #696969;
		border-radius: 20px;
		display: flex;
		gap: 200px;
		justify-content: space-between;
		align-items: center;
		text-wrap: nowrap;
	}

	.logo {
		cursor: pointer;
	}

	.about {
		font-size: 14px;
		cursor: pointer;
	}
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
</style>
