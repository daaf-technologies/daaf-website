<script>
	import { Stars } from '$lib/assets/icons';
	import Star from '$lib/assets/images/star-big.svg';
	import Story from '$lib/assets/images/mascot-story.svg';
</script>

<div
	class="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#F1F1F1] pt-[60px] pb-[115px] tablet:py-[200px]"
>
	<div>
		<p
			class="section-title pb-[30px] text-[12px] leading-[132%] tracking-[6.6px] text-[#EC5E2A] tablet:text-xl lg:pb-[40px]"
		>
			BEYOND THE CODE
		</p>
		<div class="flex flex-col gap-6 lg:gap-[50px]">
			<p
				class="text-xl leading-[153%] tracking-[-0.4px] text-[#21231E] tablet:w-[36ch] tablet:text-[30px]"
			>
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

			<p
				class="text-xl leading-[153%] tracking-[-0.4px] text-[#21231E] tablet:w-[38ch] tablet:text-[30px]"
			>
				Every collaboration is a shared journey, where we work as an extension of your team —
				bringing expertise, clarity, and a relentless <span
					class="inline-flex w-fit items-center gap-1.5 rounded-[14px] bg-[#93F27D33] px-2 py-1"
				>
					<Stars />
					<span class="text-base font-semibold text-[#40BB4A]">focus</span>
				</span> on results.
			</p>

			<p
				class="text-xl leading-[153%] tracking-[-0.4px] text-[#21231E] tablet:w-[37ch] tablet:text-[30px]"
			>
				We’re here to understand your world, overcome your challenges, and build
				<span
					class="inline-flex w-fit items-center gap-1.5 rounded-[14px] bg-[#93F27D33] px-2 py-1"
				>
					<Stars />
					<span class="text-base font-semibold text-[#40BB4A]">solutions</span>
				</span> that make a difference — for you, your team, and your customers.
			</p>
		</div>
	</div>

	<div class="star absolute">
		<img src={Star} alt="star" />
	</div>
	<!-- 94 x 111 -->
	<!-- 38 x 46 -->

	<div class="mascot absolute">
		<img src={Story} alt="story" />
	</div>
	<!-- 145 x 219 -->
	<!-- 120 x 190 -->
</div>

<style>
	.section-title {
		font-family: 'Departure Mono';
	}

	@media (max-width: 768px) {
		.star {
			width: 38px;
			height: 46px;
			top: 40px;
			right: 6px;
		}

		.mascot {
			width: 110px;
			height: 190px;
			bottom: -80px;
			left: -45px;
		}
	}

	@media (min-width: 820px) {
		.star {
			top: 150px;
			right: 0px;
		}

		.mascot {
			bottom: 0px;
			left: -50px;
		}
	}

	@media (min-width: 960px) {
		.star {
			top: 180px;
			right: 60px;
		}

		.mascot {
			bottom: 250px;
			left: -20px;
		}
	}

	@media (min-width: 1024px) {
		.star {
			top: 180px;
			right: 100px;
		}

		.mascot {
			bottom: 240px;
			left: 0;
		}
	}

	@media (min-width: 1240px) {
		.star {
			right: 215px;
		}

		.mascot {
			left: 100px;
		}
	}

	@media (min-width: 1440px) {
		.star {
			right: 335px;
		}

		.mascot {
			left: 200px;
		}
	}

	@media (min-width: 1700px) {
		.star {
			right: 450px;
		}

		.mascot {
			left: 320px;
		}
	}

	@media (min-width: 1900px) {
		.star {
			right: 520px;
		}

		.mascot {
			left: 400px;
		}
	}

	@media (min-width: 2048px) {
		.star {
			right: 600px;
		}

		.mascot {
			left: 480px;
		}
	}

	@media (min-width: 2240px) {
		.star {
			right: 700px;
		}

		.mascot {
			left: 580px;
		}
	}
	@media (min-width: 2500px) {
		.star {
			right: 850px;
		}

		.mascot {
			left: 750px;
		}
	}

	@media (min-width: 3000px) {
		.star {
			right: 1100px;
		}

		.mascot {
			left: 1000px;
		}
	}

	@media (min-width: 3800px) {
		.star {
			right: 1450px;
		}

		.mascot {
			left: 1350px;
		}
	}
</style>
