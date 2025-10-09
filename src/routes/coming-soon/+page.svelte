<script>
	import Button from '$lib/components/design/button/button.svelte';
	import ComingSoon from '$lib/assets/images/coming-soon.svg';
	import Header from '$lib/components/ui/header';
</script>

<div
	class="wrapper flex h-full w-screen flex-col items-center gap-[160px] overflow-auto px-4 py-[50px] backdrop-blur-[620px] tablet:px-0"
>
	<Header />

	<div class="flex flex-col items-center justify-center gap-[30px]">
		<img src={ComingSoon} alt="mascot" height="60" width="60" />

		<div class="flex flex-col items-center justify-center gap-4 text-center">
			<p class="text-[30px] font-medium tablet:text-[40px]">
				<span class="first-letter font-normal"> C </span>oming
				<span class="first-letter font-normal"> S </span>oon
			</p>
			<p class="description w-[280px] text-base text-[#65755f] tablet:w-[380px] tablet:text-xl">
				Get ready everyone! We are currently working on something awesome
			</p>
		</div>

		<div class="relative">
			<div class="input">
				<input
					placeholder="Email address"
					class="w-[343px] rounded-[40px] border border-[#c4c8cc] bg-white p-5 placeholder:text-sm tablet:w-full"
					name="email"
					autocomplete="email"
				/>
			</div>

			<div class="button">
				<Button
					variant="primary"
					type="submit"
					class="w-[120px] !rounded-[20px] !px-[26px] !py-2.5 text-nowrap">Notify me</Button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		background: linear-gradient(170deg, #e1fbdc 0%, #e1fbdc 60%, #b3da41b2 100%);
	}

	.first-letter {
		font-family: 'Departure mono';
	}

	.button {
		position: absolute;
		right: 10px;
		top: 10px;
	}

	@media (min-width: 820px) {
		.wrapper {
			gap: 190px;
		}

		.input {
			width: 420px;
		}
	}
</style>
