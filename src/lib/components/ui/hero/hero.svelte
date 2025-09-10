<script>
	import Button from '$lib/components/design/button';
	import Header from '../header';
</script>

<div class="hero flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="flex flex-col items-center justify-center py-[70px] lg:pt-[120px] lg:pb-0">
		<div class="flex flex-col items-center gap-3 pb-[30px]">
			<p
				class="title w-[15ch] text-center text-[30px] leading-[120%] font-semibold text-[#21231E] lg:text-[64px]"
			>
				Building Fearless Tech for Fearless Brands
			</p>

			<p class="w-[35ch] text-center text-base text-[#51636F] lg:w-[40ch] lg:text-[22px]">
				From seamless integration to future-ready platforms, DAAF builds what tomorrow demands —
				today.
			</p>
		</div>

		<Button
			type="button"
			variant="primary"
			class="lg:h-[60px] lg:w-fit"
			onclick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
		>
			<p class="text-[22px] text-nowrap">Explore our services</p>
		</Button>
	</div>
</div>

<style>
	.hero {
		background: linear-gradient(to bottom, #ffffff 0%, #d6f5d6 100%);
	}

	.title {
		font-family: 'Recoleta Alt';
	}

	@media (max-width: 768px) {
		.hero {
			height: 830px;
			background-image: url('/src/lib/assets/images/home-hero-mobile.png');
			background-size: cover;
			background-position: center;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			height: 1155px;
			background-image: url('/src/lib/assets/images/home-hero-desktop.png');
			background-size: cover;
			background-position: center;
		}
	}
</style>
