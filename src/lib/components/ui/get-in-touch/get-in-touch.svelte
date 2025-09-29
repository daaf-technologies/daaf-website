<script>
	import Button from '$lib/components/design/button';
	import GetInTouchMascot from '$lib/assets/images/get-in-touch-mascot.png';
	import StickyNote from '$lib/assets/images/sticky-note.png';
</script>

<div
	class="get-in-touch relative flex w-full flex-col items-center gap-[30px] bg-[#CEECD9] pt-[60px] lg:pt-[120px]"
>
	<p class="w-[23ch] text-center text-2xl font-medium text-[#243425] lg:w-[25ch] lg:text-[40px]">
		Big ideas deserve more than talk, they deserve action.

		<span class="font-light"> Be the brand that leads, not follows. </span>
	</p>

	<a href="/contact-us" target="_blank">
		<Button variant="primary" class="mb-[60px] w-[340px] lg:mb-0 lg:h-[60px] lg:w-[203px]"
			>Get In Touch</Button
		>
	</a>

	<img class="sticky-note absolute left-[200px]" src={StickyNote} alt="sticky-note" />

	<img class="mascot absolute bottom-0" src={GetInTouchMascot} alt="mascot" />
</div>

<style>
	.get-in-touch {
		background-image: url('/src/lib/assets/images/get-in-touch-bg.png');
		background-size: cover;
	}
	@media (max-width: 768px) {
		.sticky-note {
			width: 140px;
			height: 130px;
			top: 300px;
			left: 50px;
		}
		.get-in-touch {
			height: 617px;
		}

		.mascot {
			height: 250px;
			object-fit: cover;
			object-position: center;
		}
	}

	@media (min-width: 770px) and (max-width: 1020px) {
	}
	@media (min-width: 1024px) {
		.get-in-touch {
			min-height: 1000px;
		}

		.sticky-note {
			top: 100px;
			left: 30px;
		}
	}

	@media (min-width: 1240px) {
		.sticky-note {
			top: 100px;
			left: 130px;
		}
	}

	@media (min-width: 1500px) {
		.sticky-note {
			top: 100px;
			left: 250px;
		}
	}

	@media (min-width: 1600px) {
		.sticky-note {
			top: 100px;
			left: 350px;
		}
	}

	@media (min-width: 1800px) {
		.sticky-note {
			top: 100px;
			left: 400px;
		}
	}

	@media (min-width: 1900px) {
		.sticky-note {
			top: 100px;
			left: 450px;
		}
	}

	@media (min-width: 2000px) {
		.sticky-note {
			top: 100px;
			left: 500px;
		}
	}

	@media (min-width: 2200px) {
		.sticky-note {
			top: 100px;
			left: 620px;
		}
	}

	@media (min-width: 2500px) {
		.sticky-note {
			top: 100px;
			left: 780px;
		}
	}

	@media (min-width: 3000px) {
		.sticky-note {
			top: 100px;
			left: 1000px;
		}
	}

	@media (min-width: 3500px) {
		.sticky-note {
			top: 100px;
			left: 1400px;
		}
	}
</style>
