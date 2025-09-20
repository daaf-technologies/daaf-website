<script>
	import { Stars } from '$lib/assets/icons';
	import Star from '$lib/assets/images/star2.png';
	import BigStar from '$lib/assets/images/big-star.png';
	import About from '$lib/assets/images/about.png';
	import Story from '$lib/assets/images/story.png';
</script>

<div
	class="flex w-full flex-col items-center justify-center bg-[#F1F1F1] px-4 pt-[60px] pb-[115px] lg:px-[370px] lg:py-[200px]"
>
	<div class="relative">
		<p
			class="section-title pb-[30px] text-[12px] leading-[132%] text-[#EC5E2A] lg:pb-[40px] lg:text-lg"
		>
			BEYOND THE CODE
		</p>
		<div class="flex flex-col gap-6 lg:gap-[50px]">
			<p class="text-xl leading-[153%] tracking-[-0.4px] lg:w-[40ch]">
				We started DAAF with a simple belief — great technology isn’t just built, it’s built
				together. Over the years, we’ve worked alongside brands who wanted more than a vendor; they
				wanted a partner who understood their
				<span
					class="inline-flex w-fit items-center gap-1.5 rounded-[14px] bg-[#93F27D33] px-2 py-1"
				>
					<Stars />
					<span class="text-base font-semibold text-[#40BB4A]">challenges</span>
				</span>, shared their urgency and stayed with them through every stage.
			</p>

			<p class="text-xl leading-[153%] tracking-[-0.4px] lg:w-[40ch]">
				Every collaboration is a shared journey, where we work as an extension of your team —
				bringing expertise, clarity, and a relentless <span
					class="inline-flex w-fit items-center gap-1.5 rounded-[14px] bg-[#93F27D33] px-2 py-1"
				>
					<Stars />
					<span class="text-base font-semibold text-[#40BB4A]">focus</span>
				</span> on results.
			</p>

			<p class="text-xl leading-[153%] tracking-[-0.4px] lg:w-[40ch]">
				We’re here to understand your world, overcome your challenges, and build
				<span
					class="inline-flex w-fit items-center gap-1.5 rounded-[14px] bg-[#93F27D33] px-2 py-1"
				>
					<Stars />
					<span class="text-base font-semibold text-[#40BB4A]">solutions</span>
				</span> that make a difference — for you, your team, and your customers.
			</p>
		</div>

		<div class="desktop absolute top-[-70px] right-[-150px]">
			<img src={BigStar} alt="star" />
		</div>

		<div class="desktop absolute bottom-0 left-[-180px]">
			<img src={Story} alt="story" />
		</div>
	</div>

	<div class="mobile absolute bottom-0 left-0">
		<img src={About} alt="mascot" class="items-start" width="70" />
	</div>

	<div class="mobile absolute top-[40px] right-4">
		<img src={Star} alt="star" />
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
