<script>
	import Founders from '$lib/components/ui/founder/founders.svelte';
	import GetInTouch from '$lib/components/ui/get-in-touch/get-in-touch.svelte';
	import Footer from '$lib/components/ui/footer/footer.svelte';
	import AboutHero from '$lib/components/ui/about-hero/about-hero.svelte';
	import Story from '$lib/components/ui/story/story.svelte';
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
