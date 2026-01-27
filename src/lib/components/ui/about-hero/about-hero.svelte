<script>
	import Header from '../header/header.svelte';
</script>

<div class="about-card flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="flex flex-col items-center gap-3 pt-[70px] pb-[90px]">
		<p
			class="title w-[18ch] text-center text-[30px] leading-[120%] font-semibold lg:w-[25ch] lg:text-[64px]"
		>
			We Build What the Future
			<br /> Demands
			<span class="hyphen font-light"> - </span>
			Market Ready Solutions
		</p>

		<p
			class="w-[33ch] text-center text-base leading-[140%] font-medium text-[#51636F] lg:w-[60ch] lg:text-[22px]"
		>
			We create solutions for today’s needs and tomorrow’s opportunities, delivering technology that
			adapts, scales, and leads in a fast-changing world.
		</p>
	</div>
</div>

<style>
	.title {
		font-family: 'Recoleta Alt';
	}

	.hyphen {
		font-family: 'Inter';
	}

	@media (max-width: 819px) {
		.about-card {
			height: 720px;
			background-image: url('/src/lib/assets/images/about-hero-mobile.png');
			background-size: cover;
			background-position: center;
		}
	}

	@media (min-width: 1024px) {
		.about-card {
			height: 900px;
			background-image: url('/src/lib/assets/images/about-hero-desktop.png');
			background-size: cover;
			background-position: center;
		}
	}
</style>
