<script lang="ts">
	import FounderCard from './founder-card.svelte';
	import Afroze from '$lib/assets/images/Afroze.png';
	import Dharani from '$lib/assets/images/Dharani.png';
</script>

<div
	class="flex w-full flex-col items-center gap-2 bg-[#F6F6F6] px-9 py-[60px] lg:h-[1022px] lg:px-[360px] lg:py-[120px]"
>
	<p class="section-title text-[12px] text-[#C1A82B] lg:text-[18px]">NO SALES REPS. NO MIDDLEMEN</p>
	<p class="max-w-[20ch] text-center text-[24px] font-medium sm:max-w-[25ch]">
		Speak directly to the people who <span class="font-light"> plan and build </span> your solutions
	</p>

	<div class="flex flex-col gap-[50px] lg:relative">
		<div class="top-[150px] w-[360px] lg:absolute lg:right-0">
			<FounderCard
				href="https://www.linkedin.com/in/dharani-dharan-pm/"
				className="rotate-[-4deg] "
				src={Dharani}
				name="DA"
				designation="Co-Founder & CEO"
				imgClassname="rotate-[4deg]"
			/>
		</div>

		<div class="w-[360px] lg:absolute lg:top-[40px] lg:left-[-40px]">
			<FounderCard
				href="https://www.linkedin.com/in/afrze-ali/"
				className="rotate-[4deg] w-full"
				src={Afroze}
				name="AF"
				designation="Co-Founder & CTO"
				imgClassname="rotate-[-4deg]"
			/>
		</div>
	</div>
</div>

<style>
	.section-title {
		font-family: 'Departure Mono';
	}
</style>
