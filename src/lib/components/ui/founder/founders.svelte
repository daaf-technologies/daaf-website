<script lang="ts">
	import FounderCard from './founder-card.svelte';
	import AF from '$lib/assets/images/AF.png';
	import DA from '$lib/assets/images/DA.png';
</script>

<div
	class="founders flex w-full flex-col items-center gap-2 bg-[#F6F6F6] px-9 py-[60px] lg:h-[1022px]"
>
	<p
		class="section-title text-[12px] leading-[110%] tracking-[2px] text-nowrap text-[#C1A82B] tablet:text-[18px]"
	>
		BUILT BY ENGINEERS. LED BY EXPERIENCE.
	</p>
	<p
		class="description w-[20ch] text-center text-[24px] font-medium sm:max-w-[25ch] tablet:w-[30ch] tablet:text-[36px] lg:text-[40px]"
	>
		Connect directly with the people who
		<span class="font-[stacion] font-light italic"> understand the code </span>
		behind your vision
	</p>

	<div class="mt-[40px] mb-[30px] flex flex-col gap-[50px] tablet:relative">
		<div
			class="foundercard h-[353px] w-[292px] tablet:absolute tablet:top-[120px] tablet:right-0 tablet:h-[445px] tablet:w-[360px] lg:top-[150px] lg:right-0 lg:h-[445px] lg:w-[360px]"
		>
			<FounderCard
				href="https://www.linkedin.com/in/dharani-dharan-pm/"
				className="rotate-[-4deg] "
				src={DA}
				name="DA"
				designation="Founder"
				imgClassname="p-2"
			/>
		</div>

		<div
			class="foundercard h-[353px] w-[292px] tablet:absolute tablet:top-[20px] tablet:left-[-40px] tablet:h-[445px] tablet:w-[360px] lg:top-[40px] lg:left-[-40px] lg:h-[445px] lg:w-[360px]"
		>
			<FounderCard
				href="https://www.linkedin.com/in/afrze-ali/"
				className="rotate-[4deg] w-full"
				src={AF}
				name="AF"
				designation="Co-Founder"
				imgClassname="p-2"
			/>
		</div>
	</div>
</div>

<style>
	.section-title {
		font-family: 'Departure Mono';
	}

	@media (min-width: 820px) {
		.founders {
			min-height: 970px;
			padding: 120px 0;
		}
	}
</style>
