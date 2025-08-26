<script>
	import { Stars } from '$lib/assets/icons';
	import Star from '$lib/assets/images/star2.png';
	import About from '$lib/assets/images/about.png';
</script>

<div
	class="relative flex w-full flex-col items-center gap-6 bg-[#F1F1F1] px-4 pt-[60px] pb-[115px]"
>
	<p class="section-title pb-1.5 text-[12px] leading-[132%] tracking-[6.6px] text-[#EC5E2A]">
		Beyond the Code
	</p>

	<p class="text-xl">
		We started DAAF with a simple belief — great technology isn’t just built, it’s built together.
		Over the years, we’ve worked alongside brands who wanted more than a vendor; they wanted a
		partner who understood their
		<span class="inline-flex w-fit items-center gap-1.5 rounded-[14px] bg-[#93F27D33] px-2 py-1">
			<Stars />
			<span class="text-base font-semibold text-[#40BB4A]">challenges</span>
		</span>, shared their urgency and stayed with them through every stage.
	</p>

	<p class="text-xl">
		Every collaboration is a shared journey, where we work as an extension of your team — bringing
		expertise, clarity, and a relentless <span
			class="inline-flex w-fit items-center gap-1.5 rounded-[14px] bg-[#93F27D33] px-2 py-1"
		>
			<Stars />
			<span class="text-base font-semibold text-[#40BB4A]">focus</span>
		</span> on results.
	</p>

	<p class="text-xl">
		We’re here to understand your world, overcome your challenges, and build
		<span class="inline-flex w-fit items-center gap-1.5 rounded-[14px] bg-[#93F27D33] px-2 py-1">
			<Stars />
			<span class="text-base font-semibold text-[#40BB4A]">solutions</span>
		</span> that make a difference — for you, your team, and your customers.
	</p>

	<div class="absolute bottom-0 left-0">
		<img src={About} alt="mascot" class="items-start" />
	</div>

	<div class="absolute top-[40px] right-4">
		<img src={Star} alt="star" />
	</div>
</div>

<style>
	.section-title {
		font-family: 'Departure Mono';
	}
</style>
