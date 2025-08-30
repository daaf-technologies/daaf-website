<script lang="ts">
	import SecondaryCollapse from '$lib/components/design/collapse/secondary-collapse/secondary-collapse.svelte';
	import Footer from '$lib/components/ui/footer/footer.svelte';
	import Header from '$lib/components/ui/header/header.svelte';
</script>

<div class="privacy-policy flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="privacy-content w-full px-4 lg:w-[700px]">
		<div class="flex flex-col gap-3 pt-[70px]">
			<p class="text-[30px] font-semibold text-[#21231E] lg:text-[44px]">Privacy Policy</p>
			<p class="updated text-[16px] text-[#51636F] lg:text-[18px]">LAST UPDATED : AUGUST 2025</p>
		</div>

		<div class="my-[30px] h-[1px] w-full bg-[#21231E] opacity-10"></div>
	</div>

	<div class="px-4">
		<SecondaryCollapse />
	</div>

	<Footer />
</div>

<style>
	.privacy-policy {
		background: linear-gradient(170deg, #e1fbdc 0%, #e1fbdc 60%, #b3da41b2 100%);
	}

	.updated {
		font-family: 'Departure Mono';
	}
</style>
