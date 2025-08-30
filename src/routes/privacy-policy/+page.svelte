<script lang="ts">
	import SecondaryCollapse from '$lib/components/design/collapse/secondary-collapse/secondary-collapse.svelte';
	import Footer from '$lib/components/ui/footer/footer.svelte';
	import Header from '$lib/components/ui/header/header.svelte';
</script>

<div class="privacy-policy flex w-full flex-col items-center pt-[50px]">
	<Header />

	<div class="flex w-full flex-col gap-[30px] px-4 lg:w-[700px]">
		<div class="flex flex-col gap-3 pt-[70px] lg:pt-[120px]">
			<p class="text-[30px] font-semibold text-[#21231E] lg:text-[44px]">Privacy Policy</p>
			<p class="updated text-[16px] text-[#51636F] lg:text-[18px]">LAST UPDATED : AUGUST 2025</p>
		</div>

		<div class="h-[1px] w-full bg-[#21231E] opacity-10"></div>

		<p class="pb-[30px] text-[14px] text-[#51636F] lg:text-[16px]">
			At DAAF, we are committed to protecting your privacy and handling your personal data with
			transparency and care. This Privacy Policy outlines how we collect, use, store, and protect
			your information in accordance with applicable data protection laws in the United Arab
			Emirates, including the UAE Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law).
		</p>
	</div>

	<div class="px-4 pb-[60px] lg:w-[700px] lg:pb-[120px]">
		<SecondaryCollapse />
	</div>

	<Footer />
</div>

<style>
	.privacy-policy {
		background: linear-gradient(177.08deg, #e1fbdc -36.44%, #ffffff 97.58%);
	}

	.updated {
		font-family: 'Departure Mono';
	}
</style>
