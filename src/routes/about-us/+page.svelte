<script>
	import Founders from '$lib/components/ui/founder';
	import GetInTouch from '$lib/components/ui/get-in-touch';
	import Footer from '$lib/components/ui/footer';
	import AboutHero from '$lib/components/ui/about-hero';
	import Story from '$lib/components/ui/story';
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-L06688S0CR"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-L06688S0CR');
	</script>
</svelte:head>

<div class="flex w-full flex-col items-center justify-center">
	<AboutHero />
	<Story />
	<Founders />
	<GetInTouch />
	<Footer />
</div>
