<script>
	import Header from '../header/header.svelte';
</script>

<div class="about-card @container flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="flex flex-col items-center gap-3 pt-[70px] pb-[90px]">
		<p
			class="title w-[16ch] text-center font-[stacion] text-[30px] leading-[120%] font-semibold tablet:text-[60px] lg:text-[64px] xl:w-[25ch] @min-[960px]:text-[64px]"
		>
			We Build What the Future
			<br /> Demands
			<span class="hyphen font-[inter] font-light"> - </span>
			Market Ready Solutions
		</p>

		<p
			class="w-[33ch] text-center text-base leading-[140%] font-medium text-[#51636F] tablet:w-[60ch] tablet:text-[20px] lg:text-[22px]"
		>
			We create solutions for today’s needs and tomorrow’s opportunities, delivering technology that
			adapts, scales, and leads in a fast-changing world.
		</p>
	</div>
</div>

<style>
	.about-card {
		background-image:
			url('/src/lib/assets/images/about-hero-bg-bottom.svg'),
			url('/src/lib/assets/images/about-hero-bg.svg');
		background-repeat: no-repeat;
		background-blend-mode: luminosity;
	}
	@media (max-width: 768px) {
		.about-card {
			height: 720px;
			background-size:
				685px 294px,
				auto;
			background-position:
				50% 115%,
				bottom;
		}
	}

	@media (width: 768px) {
		.about-card {
			background-size: contain, cover;
		}
	}

	@media (min-width: 820px) {
		.about-card {
			height: 887px;
			background-position:
				50% 215%,
				bottom;
		}
	}

	@media (min-width: 1024px) {
		.about-card {
			height: 900px;
			background-position:
				50% 210%,
				bottom;
		}
	}

	@media (min-width: 1500px) {
		.about-card {
			background-size: cover, cover;
			background-position:
				50% 450px,
				bottom;
		}
	}

	@media (min-width: 1700px) {
		.about-card {
			background-position:
				50% 480px,
				bottom;
		}
	}

	@media (min-width: 2048px) {
		.about-card {
			height: 1000px;
		}
	}

	@media (min-width: 2500px) {
		.about-card {
			height: 1100px;
		}
	}

	@media (min-width: 3072px) {
		.about-card {
			height: 1200px;
		}
	}

	@media (min-width: 3840px) {
		.about-card {
			height: 1400px;
		}
	}
</style>
