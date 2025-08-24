<script lang="ts">
	import FounderCard from './founder-card.svelte';
	import Afroze from '$lib/assets/images/Afroze.png';
	import Dharani from '$lib/assets/images/Dharani.png';
</script>

<div class="flex flex-col gap-2 bg-[#F6F6F6]">
	<FounderCard
		src={Dharani}
		name="Dharani Dharan"
		designation="Co-Founder & CEO"
		imgClassname="rotate-[4deg]"
	/>

	<FounderCard
		src={Afroze}
		name="Afroze Ali"
		designation="Co-Founder & CTO"
		imgClassname="rotate-[-4deg]"
	/>
</div>
