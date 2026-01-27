<script lang="ts">
	import { DAAF, Facebook, LinkedIn, X, Instagram, TikTok, Threads } from '$lib/assets/icons';
	import Copyright from '$lib/assets/icons/copyright.svelte';
</script>

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
					<a href="/" class="top-right-content">Home</a>
					<a href="/about-us" class="top-right-content">About us</a>
					<a href="/contact-us" class="top-right-content">Contact us</a>
				</div>

				<div class="top-right-list">
					<p class="top-right-title">COMPLIANCES</p>
					<a href="/privacy-policy" class="top-right-content">Privacy Policy</a>
					<a href="/terms-of-use" class="top-right-content">Terms & Conditions</a>
				</div>
			</div>

			<div class="top-right-second">
				<div class="top-right-list">
					<p class="top-right-title">ADDRESS</p>

					<p class="address">
						Meydan Grandstand, 6th floor,
						<br />
						Meydan Road, Nad Al Sheba,
						<br />
						Dubai, U.A.E.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="bottom-left">
			<p class="bottom-left-title text-nowrap">Engineering Tomorrows’ Trust</p>
			<p class="bottom-left-content">
				Technology is only part of the story — the rest is how we work with you
			</p>
		</div>
		<div class="bottom-right">
			<a href="https://www.tiktok.com/@daaf.ae" target="_blank" class="icon tiktok">
				<TikTok />
			</a>

			<a href="https://www.facebook.com/daaf.llc" target="_blank" class="icon facebook">
				<Facebook />
			</a>

			<a href="https://www.instagram.com/daaf_llc/" target="_blank" class="icon instagram">
				<Instagram />
			</a>

			<a href="https://x.com/daaf_llc" target="_blank" class="icon x">
				<X />
			</a>

			<a href="https://www.linkedin.com/company/daaf-llc/" target="_blank" class="icon linkedin">
				<LinkedIn />
			</a>

			<a href="https://www.threads.com/@daaf_llc" target="_blank" class="icon threads">
				<Threads />
			</a>
		</div>
	</div>

	<div class="copyright">
		<Copyright />
		DAAF, 2025. All rights reserved.
	</div>
</div>

<style>
	.footer-container {
		width: 100%;
		background-color: #03100e;
		color: #c4c8cc;
	}

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

	.bottom-left-title {
		color: #ffffff;
	}

	.bottom-left-content {
		color: #c5c6c9;
	}

	.copyright {
		display: flex;
		gap: 4px;
		justify-content: center;
		align-items: center;
	}
	@media (min-width: 300px) {
		.footer-container {
			padding: 0 16px;
		}

		.top-left {
			display: flex;
			flex-direction: column;
			gap: 16px;
			padding: 60px 0 40px;
		}

		.first-letter {
			font-size: 16px;
		}

		.top-right {
			display: flex;
			flex-direction: column;
			gap: 40px;
			padding-bottom: 40px;
		}

		.top-right-first {
			display: flex;
			justify-content: space-between;
			margin-right: 20px;
		}

		.top-right-list {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.top-right-title {
			line-height: 100%;
			letter-spacing: 15.3%;
		}

		.top-right-content {
			font-size: 20px;
			line-height: 100%;
		}

		.top-right-second {
			width: 100%;
		}

		.footer-bottom {
			padding: 22px 0;
			display: flex;
			flex-direction: column;
			gap: 30px;
		}

		.bottom-left-title {
			font-size: 20px;
			text-wrap: nowrap !important;
		}

		.bottom-left {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		.bottom-left-content {
			font-size: 14px;
			color: #c4c8cc;
			width: 32ch;
		}

		.bottom-right {
			display: flex;
			gap: 30px;
		}

		.icon {
			width: 32px;
			height: 32px;
		}

		.address {
			font-size: 20px;
			line-height: 150%;
		}
		.copyright {
			padding: 30px 0;
			line-height: 100%;
		}
	}

	@media (min-width: 820px) {
		.footer-container {
			padding: 105px 60px 0;
			display: flex;
			flex-direction: column;
		}

		.footer-top {
			display: flex;
			flex-direction: column;
			gap: 40px;
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
			line-height: 140%;
		}

		.top-right {
			display: flex;
			gap: 80px;
			justify-content: space-between;
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
			line-height: 100%;
		}

		.top-right-content {
			color: #c5c6c9;
			font-size: 16px;
			line-height: 100%;
		}

		.footer-bottom {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 22px 0;
			margin-top: 60px;
		}

		.bottom-left {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		.bottom-left-title {
			color: #ffffff;
			font-size: 20px;
			line-height: 100%;
		}

		.bottom-left-content {
			color: #c4c8cc;
			font-size: 14px;
			line-height: 130%;
		}

		.bottom-right {
			display: flex;
			gap: 36px;
		}

		.icon {
			width: 36px;
			height: 36px;
		}

		.copyright {
			padding: 30px 0 50px;
			line-height: 100%;
		}
	}
	@media (min-width: 1024px) {
		.footer-container {
			padding: 90px 90px 0;
			display: flex;
			flex-direction: column;
		}

		.footer-top {
			width: 100%;
			display: flex;
			flex-direction: row;
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
			gap: 40px;
		}

		.top-right-first {
			display: flex;
			gap: 40px;
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
			text-wrap: nowrap;
		}

		.footer-bottom {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 22px 0;
			margin-top: 60px;
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

		.address {
			text-wrap: nowrap;
		}
		.copyright {
			padding: 30px 0;
		}
	}

	@media (min-width: 1440px) {
		.footer-container {
			padding: 90px 165px 0;
		}
	}
</style>
