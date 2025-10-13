<script>
	import Header from '../header/header.svelte';
</script>

<div class="about-card @container flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="flex flex-col items-center gap-3 pt-[70px] pb-[90px]">
		<p
			class="title w-[18ch] text-center font-[stacion] text-[30px] leading-[120%] font-semibold tablet:text-[60px] lg:text-[64px] xl:w-[25ch] @min-[960px]:text-[64px]"
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
	@media (max-width: 768px) {
		.about-card {
			height: 720px;
			background-image: url('/src/lib/assets/images/about-hero-mobile.png');
			background-size: cover;
			background-position: center;
		}
	}

	/* @media (min-width: 960px) {
		.title {
			font-size: 64px;
		}
	} */

	@media (min-width: 1024px) {
		.about-card {
			height: 900px;
			background-image: url('/src/lib/assets/images/about-hero-desktop.png');
			background-size: cover;
			background-position: center;
		}
	}
</style>
