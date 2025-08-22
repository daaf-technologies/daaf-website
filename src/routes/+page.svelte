<script>
	import Button from '$lib/components/design/button/button.svelte';
	import Header from '$lib/components/ui/header';
	import ComingSoon from '$lib/assets/images/coming-soon.svg';
</script>

<div
	class="wrapper flex h-screen w-screen flex-col items-center gap-[160px] px-4 py-[50px] backdrop-blur-[620px] lg:gap-[190px] lg:px-0"
>
	<Header minimal={true} className="header w-[343px] lg:w-[646px] !gap-[72px]" />

	<div class="flex flex-col items-center justify-center gap-[30px]">
		<img src={ComingSoon} alt="mascot" height="60" width="60" />

		<div class="flex flex-col items-center justify-center gap-4 text-center">
			<p class="text-[30px] font-medium lg:text-[40px]">
				<span class="first-letter font-normal"> C </span>oming
				<span class="first-letter font-normal"> S </span>oon
			</p>
			<p class="w-[280px] text-base text-[#65755f] lg:w-[380px] lg:text-xl">
				Get ready everyone! We are currently working on something awesome
			</p>
		</div>

		<div class="relative">
			<input
				placeholder="Email address"
				class="input w-[343px] rounded-[40px] border border-[#c4c8cc] bg-white p-5 placeholder:text-sm lg:w-[420px]"
				name="email"
				autocomplete="email"
			/>
			<Button
				variant="primary"
				type="submit"
				class="button absolute top-2.5 right-2.5 w-[120px] !rounded-[20px] !px-[26px] !py-2.5 text-nowrap"
				>Notify me</Button
			>
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
</style>
