<script>
	import Header from '../header/header.svelte';
	import AboutHero from '$lib/assets/images/about-hero.png';
</script>

<div class="about-card flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="flex flex-col items-center gap-3 pt-[70px] pb-[90px]">
		<p class="title w-[18ch] text-center text-[30px] font-semibold lg:w-[25ch] lg:text-[64px]">
			We Build What the Future Demands
			<span class="hyphen font-light"> - </span>
			Market Ready Solutions
		</p>

		<p class="w-[33ch] text-center text-base text-[#51636F] lg:w-[40ch] lg:text-[22px]">
			We create solutions for today’s needs and tomorrow’s opportunities, delivering technology that
			adapts, scales, and leads in a fast-changing world.
		</p>
	</div>

	<div class="mobile">
		<img src={AboutHero} alt="hero" class="w-full" />
	</div>
</div>

<style>
	.title {
		font-family: 'Recoleta Alt';
	}

	.hyphen {
		font-family: 'Inter';
	}

	@media (max-width: 768px) {
		/*  */
	}

	@media (min-width: 1024px) {
		.mobile {
			display: none;
		}

		.about-card {
			height: 900px;
			background-image: url('/src/lib/assets/images/about-hero-desktop.png');
			background-size: cover;
			background-position: center;
		}
	}
</style>
