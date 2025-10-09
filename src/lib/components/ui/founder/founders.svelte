<script lang="ts">
	import FounderCard from './founder-card.svelte';
	import AF from '$lib/assets/images/AF.png';
	import DA from '$lib/assets/images/DA.png';
</script>

<div
	class="flex w-full flex-col items-center gap-2 bg-[#F6F6F6] px-9 py-[60px] lg:h-[1022px] lg:py-[120px]"
>
	<p class="section-title text-[12px] text-nowrap text-[#C1A82B] lg:text-[18px]">
		NO SALES REPS. NO MIDDLEMEN
	</p>
	<p
		class="w-[20ch] text-center text-[24px] font-medium sm:max-w-[25ch] lg:w-[30ch] lg:text-[40px]"
	>
		Speak directly to the people who <span class="font-light"> plan and build </span> your solutions
	</p>

	<div class="mt-[40px] mb-[60px] flex flex-col gap-[50px] lg:relative">
		<div
			class="h-[350px] w-[300px] lg:absolute lg:top-[150px] lg:right-0 lg:h-[445px] lg:w-[360px]"
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
			class="h-[350px] w-[300px] lg:absolute lg:top-[40px] lg:left-[-40px] lg:h-[445px] lg:w-[360px]"
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
</style>
