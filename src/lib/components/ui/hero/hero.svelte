<script>
	import Header from '../header';
	import Button from '$lib/components/design/button';
	import Globe from '$lib/assets/images/globe.svg';
	import Mascot from '$lib/assets/images/mascot.svg';
</script>

<div class="hero relative flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="flex flex-col items-center justify-center py-[70px] lg:pt-[120px] lg:pb-0">
		<div class="flex flex-col items-center gap-3 pb-[30px]">
			<p
				class="title w-[20ch] text-center font-[stacion] text-[30px] leading-[120%] font-semibold text-[#21231E] tablet:text-[60px] lg:text-[64px]"
			>
				Building Fearless Tech for Fearless Brands
			</p>

			<p
				class="w-[35ch] text-center text-base text-[#51636F] tablet:w-[40ch] tablet:text-xl lg:w-[40ch] lg:text-[22px]"
			>
				From seamless integration to future-ready platforms, DAAF builds what tomorrow demands —
				today.
			</p>
		</div>

		<Button
			type="button"
			variant="primary"
			class="h-[44px] tablet:h-[60px] tablet:p-[18px] lg:h-[60px] lg:w-fit"
			onclick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
		>
			<p class="text-base text-nowrap tablet:text-[22px]">Explore our services</p>
		</Button>
	</div>

	<img src={Globe} class="globe" alt="globe" />
	<img src={Mascot} class="mascot" alt="mascot" />
</div>

<style>
	.hero {
		overflow: hidden;
	}
	@media (max-width: 768px) {
		.hero {
			height: 830px;
			background-image: url('/src/lib/assets/images/home-hero-bg.svg');
			background-size: cover;
			background-repeat: no-repeat;
		}

		.globe {
			position: absolute;
			bottom: -256px;
			object-fit: cover;
			width: 546px;
			height: 546px;
		}

		.mascot {
			position: absolute;
			bottom: 226px;
			right: 62px;
			width: 97px;
			height: 130px;
		}
	}

	@media (min-width: 768px) {
		.mascot {
			bottom: 210px;
			right: 210px;
		}
	}

	@media (min-width: 820px) {
		.hero {
			min-height: 1155px;
			background-image:
				url('/src/lib/assets/images/home-hero-bg-bottom.svg'),
				url('/src/lib/assets/images/home-hero-bg.svg');
			background-size: contain, cover;
			background-position: bottom, center;
			background-repeat: no-repeat;
		}

		.globe {
			position: absolute;
			bottom: -570px;
			object-fit: cover;
			width: 1106px;
			height: 1106px;
		}

		.mascot {
			position: absolute;
			bottom: 375px;
			right: 62px;
			width: 175px;
			height: 234px;
		}
	}

	@media (min-width: 960px) {
		.mascot {
			bottom: 380px;
			right: 170px;
		}
	}

	@media (min-width: 1024px) {
		.mascot {
			bottom: 330px;
			right: 110px;
		}
	}

	@media (min-width: 1280px) {
		.mascot {
			bottom: 330px;
			right: 250px;
		}
	}

	@media (min-width: 1500px) {
		.mascot {
			bottom: 320px;
			right: 350px;
		}
	}

	@media (min-width: 1700px) {
		.mascot {
			bottom: 330px;
			right: 470px;
		}
	}

	@media (min-width: 1900px) {
		.mascot {
			bottom: 320px;
			right: 550px;
		}
	}

	@media (min-width: 2000px) {
		.mascot {
			bottom: 320px;
			right: 630px;
		}
	}

	@media (min-width: 2200px) {
		.mascot {
			bottom: 310px;
			right: 700px;
		}
	}

	@media (min-width: 2500px) {
		.mascot {
			bottom: 310px;
			right: 870px;
		}
	}

	@media (min-width: 3000px) {
		.mascot {
			bottom: 310px;
			right: 1140px;
		}
	}

	@media (min-width: 3800px) {
		.hero {
			background-size: cover;
		}
		.mascot {
			bottom: 310px;
			right: 1500px;
		}
	}
</style>
