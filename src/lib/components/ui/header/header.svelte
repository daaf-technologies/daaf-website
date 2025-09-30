<script lang="ts">
	import { Close, DAAF, HamburgerMenu, Arrow, MobileArrow } from '$lib/assets/icons';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/design/button';

	let { minimal, className }: { minimal?: boolean; className?: string } = $props();

	let open = $state(false);

	const toggle = () => (open = !open);
</script>

<div class={`${className} header`}>
	<a href="/" class="logo">
		<DAAF />
	</a>
	<div class="nav">
		{#if !minimal}
			<a href="/about-us" class="about">About us</a>
		{/if}
		<Button variant="secondary" onclick={() => goto('/contact-us')}>Contact us</Button>
	</div>

	{#if !minimal}
		<button class="hamburger" onclick={toggle}>
			{#if !open}
				<HamburgerMenu />
			{:else}
				<Close />
			{/if}
		</button>
	{/if}

	{#if open}
		<div class="mobile-menu">
			<a class="about" href="/about-us">
				<p class="text-base">About us</p>
				<span>
					<MobileArrow />
				</span>
			</a>

			<Button variant="secondary" onclick={() => goto('/contact-us')}>Contact us</Button>
		</div>
	{/if}
</div>

<style>
	.header {
		position: relative;
		background-color: #21231e;
		color: #ffffff;
		border: 2px solid #696969;
		border-radius: 20px;
		display: flex;
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
			padding: 16px 12px;
		}

		.mobile-menu {
			display: flex;
			flex-direction: column;
			gap: 30px;
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

	@media (min-width: 820px) {
		.header {
			width: 646px;
			padding: 16px 30px;
			gap: 200px;
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
