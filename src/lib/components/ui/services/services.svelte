<script>
	import TertiaryCollapse from '$lib/components/design/collapse/tertiary-collapse.svelte';
	import Tabs from '$lib/components/design/tabs';
	import { tabs } from '$lib/constants/tabs';
</script>

<div
	id="services"
	class="flex w-full flex-col items-center justify-center gap-[40px] bg-[#F1F1F1] p-4 py-[60px] tablet:px-[60px] tablet:py-[120px]"
>
	<div class="flex flex-col gap-3">
		<p
			class="section-title text-center text-[12px] leading-[110%] tracking-[2px] text-[#38B543] tablet:text-[18px] lg:text-[18px]"
		>
			WHERE DAAF CREATES IMPACT
		</p>
		<p
			class="w-[22ch] text-center text-2xl leading-[120%] text-[#402A2A] tablet:w-[31ch] tablet:text-[36px] lg:text-[40px]"
		>
			<span class="font-bold"> From legacy modernization to</span>
			<span class="font-[Stacion] font-light italic"> AI-driven systems, </span>
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

	@media (min-width: 820px) {
		.mobile {
			display: none;
		}
	}
</style>
