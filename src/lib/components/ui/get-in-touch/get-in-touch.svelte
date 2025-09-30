<script>
	import Button from '$lib/components/design/button';
	import GetInTouchMascot from '$lib/assets/images/get-in-touch-mascot.png';
	import StickyNote from '$lib/assets/images/sticky-note.png';
</script>

<div
	class="get-in-touch relative flex w-full flex-col items-center gap-[30px] bg-[#CEECD9] pt-[60px] lg:pt-[120px]"
>
	<p
		class="title w-[23ch] text-center text-2xl font-medium text-[#243425] md:w-[25ch] lg:text-[40px]"
	>
		Big ideas deserve more than talk, they deserve action.

		<span class="font-[stacion] font-light italic"> Be the brand that leads, not follows. </span>
	</p>

	<a href="/contact-us" target="_blank" class="contact-link">
		<Button
			variant="primary"
			class="contact-button mb-[60px] w-[340px] md:mb-0 md:h-[60px] md:w-[203px]"
		>
			<p class="contact-text font-semibold">Get In Touch</p>
		</Button>
	</a>

	<img class="sticky-note absolute left-[200px]" src={StickyNote} alt="sticky-note" />

	<img class="mascot absolute" src={GetInTouchMascot} alt="mascot" />
</div>

<style>
	.get-in-touch {
		background-image: url('/src/lib/assets/images/get-in-touch-bg.png');
		background-size: cover;
	}
	@media (max-width: 768px) {
		.get-in-touch {
			height: 617px;
		}
		.sticky-note {
			width: 140px;
			height: 130px;
			top: 300px;
			left: 50px;
		}

		.mascot {
			bottom: 0;
			height: 250px;
			object-fit: cover;
			object-position: center;
		}

		.contact-text {
			font-size: 16px;
		}
	}

	@media (min-width: 820px) {
		.get-in-touch {
			min-height: 1000px;
		}

		.title {
			font-size: 40px;
		}

		.sticky-note {
			width: 155px;
			height: 146px;
			top: 47px;
			left: 27px;
		}

		.mascot {
			bottom: 0;
			object-fit: none;
			object-position: 28%;
			width: 100%;
			height: 580px;
		}

		.contact-text {
			font-size: 22px;
		}
	}

	@media (min-width: 960px) {
		.sticky-note {
			width: 249px;
			height: 234px;
			top: 65px;
			left: 18px;
		}

		.mascot {
			object-position: 17%;
		}
	}

	@media (min-width: 1024px) {
		.sticky-note {
			top: 100px;
			left: 30px;
		}

		.mascot {
			object-position: 6%;
		}
	}

	@media (min-width: 1280px) {
		.sticky-note {
			top: 100px;
			left: 130px;
		}

		.mascot {
			object-position: right;
		}
	}

	@media (min-width: 1512px) {
		.sticky-note {
			top: 100px;
			left: 250px;
		}

		.mascot {
			object-position: right;
		}
	}

	@media (min-width: 1600px) {
		.sticky-note {
			top: 100px;
			left: 350px;
		}
		.mascot {
			object-position: center;
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
