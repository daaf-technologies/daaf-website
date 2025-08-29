<script>
	import Founders from '$lib/components/ui/founder/founders.svelte';
	import GetInTouch from '$lib/components/ui/get-in-touch/get-in-touch.svelte';
	import Footer from '$lib/components/ui/footer/footer.svelte';
	import AboutHero from '$lib/components/ui/about-hero/about-hero.svelte';
	import Story from '$lib/components/ui/story/story.svelte';
</script>

<div class="flex w-full flex-col items-center justify-center">
	<AboutHero />
	<Story />
	<Founders />
	<GetInTouch />
	<Footer />
</div>
