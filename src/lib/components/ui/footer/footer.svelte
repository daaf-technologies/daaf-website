<script lang="ts">
	import { DAAF, Facebook, LinkedIn, X, Instagram, UK, Dubai, Globe } from '$lib/assets/icons';
	import Copyright from '$lib/assets/icons/copyright.svelte';
	import Dropdown from '$lib/components/design/dropdown/dropdown.svelte';

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

	function selectLanguage(lang: string) {
		value = lang;
	}
</script>

{#snippet left()}
	<span>
		<Globe fill="#E6E6E6" />
	</span>
{/snippet}

<div class="footer-container">
	<div class="footer-top">
		<div class="top-left">
			<DAAF />
			<p class="top-left-title">
				<span class="first-letter"> D </span>igital
				<span class="first-letter"> A </span>ugmentation &
				<span class="first-letter"> A </span>pplication
				<span class="first-letter"> F </span>actory
			</p>
		</div>
		<div class="top-right">
			<div class="top-right-first">
				<div class="top-right-list">
					<p class="top-right-title">MENU</p>
					<p class="top-right-content">Home</p>
					<p class="top-right-content">About us</p>
					<p class="top-right-content">Contact us</p>
				</div>

				<div class="top-right-list">
					<p class="top-right-title">COMPLIANCES</p>
					<p class="top-right-content">Privacy Policy</p>
					<p class="top-right-content">Terms & Conditions</p>
				</div>
			</div>

			<div class="top-right-second">
				<div class="top-right-list">
					<p class="top-right-title">LANGUAGE</p>

					<Dropdown
						{left}
						variant="secondary"
						{options}
						{value}
						{selectLanguage}
						dropdownControlClassname="w-full !justify-between text-sm"
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="bottom-left">
			<p class="bottom-left-title">Engineering Tomorrows’ Trust</p>
			<p class="bottom-left-content">
				Technology is only part of the story — the rest is how we work with you
			</p>
		</div>
		<div class="bottom-right">
			<Facebook />
			<Instagram />
			<X />
			<LinkedIn />
		</div>
	</div>

	<div class="copyright">
		<Copyright />
		DAAF, 2025. All rights reserved.
	</div>
</div>

<style>
	.first-letter {
		font-family: 'Departure Mono';
		color: #40bb4a;
	}

	.top-right-title {
		font-family: 'Departure Mono';
		color: #76797e;
		font-size: 14px;
	}

	.footer-bottom {
		border-top: 1px solid #2d373e;
		border-bottom: 1px solid #2d373e;
	}

	.copyright {
		display: flex;
		gap: 4px;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 768px) {
		.footer-container {
			padding: 0 16px;
			background-color: #03100e;
			color: #c4c8cc;
		}

		.top-left {
			display: flex;
			flex-direction: column;
			gap: 16px;
			padding: 60px 0;
		}

		.first-letter {
			font-size: 16px;
		}

		.top-right {
			display: flex;
			flex-direction: column;
			gap: 40px;
			padding-bottom: 60px;
		}

		.top-right-first {
			display: flex;
			justify-content: space-between;
			margin-right: 20px;
		}

		.top-right-content {
			color: #c5c6c9;
			font-size: 20px;
		}

		.top-right-list {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.top-right-second {
			width: 100%;
		}

		.bottom-right {
			display: flex;
			gap: 40px;
		}

		.footer-bottom {
			padding: 22px 0;
			display: flex;
			flex-direction: column;
			gap: 30px;
		}

		.bottom-left-title {
			font-size: 20px;
		}

		.bottom-left {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		.copyright {
			padding: 30px 0;
		}
	}
	@media (min-width: 1024px) {
		.footer-container {
			width: 100%;
			padding: 165px;
			background-color: #03100e;
			color: #c4c8cc;
			display: flex;
			flex-direction: column;
		}

		.footer-top {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}

		.top-left {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.top-left-title {
			font-size: 26px;
			width: 270px;
		}

		.top-right {
			display: flex;
			gap: 80px;
		}

		.top-right-first {
			display: flex;
			gap: 60px;
		}

		.top-right-list {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.top-right-title {
			color: #76797e;
			font-size: 14px;
		}

		.top-right-content {
			color: #c5c6c9;
			font-size: 16px;
		}

		.footer-bottom {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 22px 0;
			margin: 40px 0 22px;
		}

		.bottom-left {
			display: flex;
			flex-direction: column;
			gap: 12px;
			width: 270px;
		}

		.bottom-right {
			display: flex;
			gap: 36px;
		}

		.bottom-left-title {
			color: #ffffff;
			font-size: 20px;
		}

		.bottom-left-content {
			color: #c4c8cc;
			font-size: 14px;
		}
	}
</style>
