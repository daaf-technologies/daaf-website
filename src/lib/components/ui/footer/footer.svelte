<script lang="ts">
	import { DAFF, Facebook, LinkedIn, X, Instagram } from '$lib/assets/icons';
	import Copyright from '$lib/assets/icons/copyright.svelte';
</script>

<div class="footer-container">
	<div class="footer-top">
		<div class="top-left">
			<DAFF />
			<p class="top-left-title">Digital Augmentation & Application Factory</p>
		</div>
		<div class="top-right">
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

			<div class="top-right-list">
				<p class="top-right-title">LANGUAGE</p>
				<!-- placeholder for dropdown -->
				<p>English</p>
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
	.footer-container {
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
		border-top: 1px solid #2d373e;
		border-bottom: 1px solid #2d373e;
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

	.copyright {
		display: flex;
		gap: 4px;
		justify-content: center;
		align-items: center;
	}
</style>
