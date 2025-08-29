<script>
	import TertiaryCollapse from '$lib/components/design/collapse/tertiary-collapse.svelte';
	import Tabs from '$lib/components/design/tabs';
	import { tabs } from '$lib/constants/tabs';
</script>

<div
	id="services"
	class="flex w-full flex-col items-center justify-center gap-[40px] bg-[#F1F1F1] p-4 py-[60px]"
>
	<div class="flex flex-col gap-3">
		<p class="section-title text-center text-[12px] text-[#38B543] lg:text-[18px]">
			Where DAAF Creates Impact
		</p>
		<p class="lg:text[40px] w-[35ch] text-center text-2xl">
			<span class="font-bold"> From legacy modernization to</span>
			<span class="font-light italic"> AI-driven systems, </span>
			<span class="font-bold"> we engineer results that matter</span>
		</p>
	</div>

	<div class="mobile">
		<TertiaryCollapse />
	</div>

	<div class="desktop">
		<Tabs {tabs} />
	</div>
</div>

<style>
	.section-title {
		font-family: 'Departure Mono';
	}
	@media (max-width: 768px) {
		.desktop {
			display: none;
		}
	}

	@media (min-width: 1024px) {
		.mobile {
			display: none;
		}
	}
</style>
