<script>
	import TertiaryCollapse from '$lib/components/design/collapse/tertiary-collapse.svelte';
	import Tabs from '$lib/components/design/tabs';
	import { tabs } from '$lib/constants/tabs';
</script>

<div class="flex w-full flex-col items-center justify-center gap-[40px] p-4 py-[60px]">
	<div class="flex flex-col gap-3">
		<p class="text-center text-[#38B543]">Where DAAF Creates Impact</p>
		<p class="w-[18ch] text-center text-2xl">
			<span class="font-bold"> Focused services. Proven frameworks. </span>
			<span class="font-light"> Measurable results </span>
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
