<script>
	import Footer from '$lib/components/ui/footer/footer.svelte';
	import Founders from '$lib/components/ui/founder/founders.svelte';
	import GetInTouch from '$lib/components/ui/get-in-touch/get-in-touch.svelte';
	import Hero from '$lib/components/ui/hero';
	import Services from '$lib/components/ui/services';
	import Technologies from '$lib/components/ui/technologies/technologies.svelte';
</script>

<div class="flex w-full flex-col items-center justify-center">
	<Hero />
	<Services />
	<Founders />
	<Technologies />
	<GetInTouch />
	<Footer />
</div>
