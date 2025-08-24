<script>
	import Button from '$lib/components/design/button';
	import Header from '../header';
	import Globe from '$lib/assets/images/globe.png';
	import World from '$lib/assets/images/world.png';
	import Mascot from '$lib/assets/images/mascot.png';
	import Hero from '$lib/assets/images/hero.png';
</script>

<div class="hero flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="flex flex-col items-center justify-center py-[70px] lg:pb-0">
		<div class="flex flex-col items-center gap-3 pb-[30px]">
			<p class="title w-[15ch] text-center text-[30px] font-semibold lg:text-[64px]">
				Building Fearless Tech for Fearless Brands
			</p>

			<p class="w-[35ch] text-center text-base text-[#51636F] lg:w-[40ch] lg:text-[22px]">
				From seamless integration to future-ready platforms, DAAF builds what tomorrow demands —
				today.
			</p>
		</div>

		<Button type="button" variant="primary" class="lg:h-[60px] lg:w-[200px]">Get In Touch</Button>
	</div>

	<div class="mobile relative w-full">
		<img src={Globe} alt="globe" class="w-full" />

		<img src={Mascot} alt="mascot" class="absolute top-0 right-[50px]" />
	</div>

	<div class="desktop relative">
		<img src={World} alt="globe" class="w-full" />

		<img src={Hero} alt="mascot" class="absolute top-[60px] right-[300px]" />
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
		.desktop {
			display: none;
		}
	}

	@media (min-width: 1024px) {
		.mobile {
			display: none;
		}
	}
</style>
