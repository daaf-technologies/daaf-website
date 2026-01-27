<script lang="ts">
	import { Close, DAAF, HamburgerMenu, MobileArrow } from '$lib/assets/icons';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/design/button';

	let { minimal, className }: { minimal?: boolean; className?: string } = $props();

	let open = $state(false);

	const toggle = () => (open = !open);

	const currentPath = $derived($page.url.pathname);
	const isActive = (path: string) => {
		if (path === '/') {
			return currentPath === '/';
		}
		return currentPath.startsWith(path);
	};
</script>

<div class={`${className} header`}>
	<a href="/" class="logo">
		<DAAF />
	</a>
	<div class="nav">
		{#if !minimal}
			<a href="/about-us" class="about" class:active={isActive('/about-us')}>
				{#if isActive('/about-us')}
					<span class="active-dot"></span>
				{/if}
				About us
			</a>

			<a href="/blogs" class="blogs" class:active={isActive('/blogs')}>
				{#if isActive('/blogs')}
					<span class="active-dot"></span>
				{/if}
				Blogs
			</a>

			<a href="/case-study" class="cases" class:active={isActive('/case-study')}>
				{#if isActive('/case-study')}
					<span class="active-dot"></span>
				{/if}
				Case Study
			</a>
		{/if}
	</div>

	<div class="contact">
		<Button
			class="button h-[48px]! rounded-[78px]! p-4!"
			variant="secondary"
			onclick={() => goto('/contact-us')}>Contact us</Button
		>
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
			<a class="about" href="/about-us" class:active={isActive('/about-us')}>
				{#if isActive('/about-us')}
					<span class="active-dot"></span>
				{/if}
				<p class="text-base">About us</p>
				<span>
					<MobileArrow />
				</span>
			</a>

			<a class="blogs" href="/blogs" class:active={isActive('/blogs')}>
				{#if isActive('/blogs')}
					<span class="active-dot"></span>
				{/if}
				<p class="text-base">Blogs</p>
				<span>
					<MobileArrow />
				</span>
			</a>

			<a class="cases" href="/case-study" class:active={isActive('/case-study')}>
				{#if isActive('/case-study')}
					<span class="active-dot"></span>
				{/if}
				<p class="text-base">Case Study</p>
				<span>
					<MobileArrow />
				</span>
			</a>

			<Button variant="secondary" onclick={() => goto('/contact-us')} class="h-[40px]!"
				>Contact us</Button
			>
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
		cursor: pointer;
	}

	@media (min-width: 300px) {
		.header {
			width: 343px;
			padding: 16px 12px;
		}

		.mobile-menu {
			display: flex;
			flex-direction: column;
			gap: 20px;
			width: 100%;
			position: absolute;
			top: 72px;
			left: 0;
			padding: 30px 24px;
			border-radius: 20px;
			background-color: #21231e;
		}

		.mobile-menu a {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 16px;
			text-decoration: none;
			color: #ffffff;
		}

		.mobile-menu a.active {
			font-weight: 600;
		}

		.mobile-menu .active-dot {
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background-color: #38b543;
			flex-shrink: 0;
		}

		.about {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 16px;
		}

		.blogs {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 16px;
		}

		.cases {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 16px;
		}

		.nav {
			display: none;
		}

		.contact {
			display: none;
		}
	}

	@media (min-width: 820px) {
		.header {
			padding: 8px 8px 8px 24px;
			gap: 130px;
			border-radius: 60px;
		}
		.nav {
			display: flex;
			align-items: center;
			gap: 24px;
		}

		.button {
			border-radius: 78px !important;
			padding: 16px !important;
			height: 48px !important;
		}

		.hamburger {
			display: none;
		}

		.mobile-menu {
			display: none;
		}

		.nav a {
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 14px;
			line-height: 16px;
			font-weight: 300;
			text-decoration: none;
			color: #ffffff;
		}

		.nav a.active {
			font-weight: 600;
		}

		.active-dot {
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background-color: #38b543;
			flex-shrink: 0;
		}

		.about {
			font-size: 14px;
			line-height: 16px;
			font-weight: 300;
		}

		.blogs {
			font-size: 14px;
			line-height: 16px;
			font-weight: 300;
		}

		.cases {
			font-size: 14px;
			line-height: 16px;
			font-weight: 300;
		}
	}
</style>
