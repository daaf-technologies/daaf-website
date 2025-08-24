<script lang="ts">
	import Technologies from '$lib/assets/images/technologies.png';
	import Stack from '$lib/assets/images/stack.png';
</script>

<div class="flex w-full flex-col items-center justify-center gap-[40px] bg-[#F9FAFC] py-[60px]">
	<div class="flex flex-col items-center gap-3">
		<p class="section-title text-[12px] text-[#0068D6] lg:text-lg">Built with Modern Tech</p>

		<p class="w-[18ch] text-2xl font-medium lg:text-[40px]">
			Proven <span class="font-light"> Tech Stacks </span> for future - ready solutions.
		</p>
	</div>

	<img src={Technologies} alt="tech" class="mobile" />

	<img src={Stack} alt="stack" class="desktop" />
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
