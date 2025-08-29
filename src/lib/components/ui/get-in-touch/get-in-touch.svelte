<script>
	import Office from '$lib/assets/images/office.png';
	import Daaf from '$lib/assets/images/daaf.png';
	import Button from '$lib/components/design/button';
	import StickyNote from '$lib/assets/images/sticky-note.png';
</script>

<div
	class="get-in-touch relative flex w-full flex-col items-center justify-center gap-[30px] bg-[#CEECD9] pt-[120px]"
>
	<img
		src={StickyNote}
		alt="sticky-note"
		class="absolute top-[350px] left-[50px] lg:top-[120px] lg:left-[130px] lg:h-[235px] lg:w-[240]"
	/>

	<p class="w-[23ch] text-center text-2xl font-medium text-[#243425] lg:w-[25ch] lg:text-[40px]">
		Big ideas deserve more than talk, they deserve action.

		<span class="font-light"> Be the brand that leads, not follows. </span>
	</p>

	<Button variant="primary" class="mb-[60px] w-[340px] lg:mb-0 lg:h-[60px] lg:w-[203px]"
		>Get In Touch</Button
	>

	<img src={Daaf} alt="office" class="mobile w-full" />

	<img src={Office} alt="office" class="desktop w-full" />
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
