<script>
	import Button from '$lib/components/design/button';
</script>

<div
	class="get-in-touch relative flex w-full flex-col items-center gap-[30px] bg-[#CEECD9] pt-[60px]"
>
	<p class="w-[23ch] text-center text-2xl font-medium text-[#243425] lg:w-[25ch] lg:text-[40px]">
		Big ideas deserve more than talk, they deserve action.

		<span class="font-light"> Be the brand that leads, not follows. </span>
	</p>

	<Button variant="primary" class="mb-[60px] w-[340px] lg:mb-0 lg:h-[60px] lg:w-[203px]"
		>Get In Touch</Button
	>
</div>

<style>
	@media (max-width: 768px) {
		.get-in-touch {
			height: 617px;
			background-image: url('/src/lib/assets/images/get-in-touch-mobile.png');
			background-size: cover;
			background-position: center;
		}
	}
	@media (min-width: 1024px) {
		.get-in-touch {
			height: 923px;
			background-image: url('/src/lib/assets/images/get-in-touch-desktop.png');
			background-size: cover;
			background-position: center;
		}
	}
</style>
