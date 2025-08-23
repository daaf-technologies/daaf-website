<script>
	import { Dubai, Shield } from '$lib/assets/icons';
	import Button from '$lib/components/design/button';
	import Input from '$lib/components/design/input';
	import Header from '$lib/components/ui/header';
</script>

<div
	class="wrapper flex h-full max-w-full flex-col items-center overflow-y-auto px-4 py-[50px] backdrop-blur-[620px] lg:gap-[140px] lg:px-[200px]"
>
	<Header minimal={true} className="header w-[343px] lg:w-[646px] !gap-[72px]" />
	<div class="lg:flex lg:gap-[118px]">
		<div
			class="description flex flex-col gap-3 pt-[70px] pb-[40px] lg:w-[530px] lg:gap-5 lg:pt-0 lg:pb-0"
		>
			<div
				class="title text-center text-[30px] leading-[120%] font-semibold text-[#21231e] lg:text-left lg:text-[50px]"
			>
				Whether it’s a small step or a bold idea <span class="special font-normal">-</span> the door’s
				always open
			</div>
			<div
				class="text-center text-[16px] leading-[140%] font-medium text-[#51636f] lg:text-left lg:text-[22px]"
			>
				One message is all it takes to set your vision in motion. Let's create the solutions your
				business needs to thrive today and tomorrow.
			</div>
		</div>

		<div
			class="contact-form flex flex-col gap-5 rounded-xl border border-[#C4C8CC] px-4 py-6 shadow-[inset_0px_4px_4px_0px_#ffffff40] lg:w-[432px] lg:border-none lg:px-0 lg:py-0"
		>
			<p class="text-sm font-normal text-[#21231e]">Please fill these details For Enquiry</p>

			<div class="flex flex-col gap-5">
				<div class="flex flex-col gap-5 lg:flex-row lg:gap-4">
					<Input placeholder="Name*" type="text" name="name" />
					<Input placeholder="E-mail address*" type="email" name="mail" />
				</div>
				<div class="relative flex">
					<div class="absolute top-[13px] left-[12px] flex items-center justify-center gap-1">
						<Dubai />
						<p class="countrycode">+971</p>
					</div>
					<Input type="tel" placeholder="- phone number" className="!pl-[80px]" name="phone" />
				</div>
			</div>

			<p
				class="flex items-baseline justify-center gap-3 rounded-lg border border-white bg-[#d9ffdc66] p-3 text-sm text-[#69747d]"
			>
				<span>
					<Shield />
				</span>
				It is DAAf's promise to offer a strictly spam free service. We only reach out if you want us
				to.
			</p>

			<Input placeholder="How you came to know about us*" type="text" name="platform" />

			<textarea
				class="h-[135px] w-full resize-none rounded-lg border border-[#d6dee6] bg-white p-3 outline-none placeholder:text-sm placeholder:text-[#51636f] placeholder:opacity-100"
				name="query"
				rows="6"
				placeholder="Write your query here*"
			></textarea>

			<div class="flex justify-end">
				<Button variant="primary" type="submit" class="lg:w-[130px]">Submit</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		background: linear-gradient(170deg, #e1fbdc 0%, #e1fbdc 60%, #b3da41b2 100%);
	}

	.title {
		font-family: 'recoleta alt';
	}

	.special {
		font-family: 'Inter';
	}

	.contact-form {
		box-shadow: 0px 4px 4px 0px #ffffff40 inset;
	}
</style>
