<script>
	import { Dubai, Shield } from '$lib/assets/icons';
	import Button from '$lib/components/design/button';
	import Input from '$lib/components/design/input';
	import Header from '$lib/components/ui/header';
</script>

<div class="wrapper flex h-full flex-col items-center px-4 py-[50px] lg:gap-[140px] lg:px-[200px]">
	<Header minimal={true} className="header w-[343px] lg:w-[646px] !gap-[72px]" />
	<div class="container lg:flex">
		<div
			class="description flex flex-col gap-3 pt-[70px] pb-[40px] lg:w-[530px] lg:gap-5 lg:pt-0 lg:pb-0"
		>
			<div class="title text-center text-[30px] font-semibold lg:text-left lg:text-[50px]">
				Whether it’s a small step or a bold idea <span class="special">-</span> the door’s always open
			</div>
			<div class="content text-center text-[16px] font-medium lg:text-left lg:text-[22px]">
				One message is all it takes to set your vision in motion. Let's create the solutions your
				business needs to thrive today and tomorrow.
			</div>
		</div>

		<div
			class="contact-form flex flex-col gap-5 rounded-xl border border-[#C4C8CC] px-4 py-6 shadow-[inset_0px_4px_4px_0px_#ffffff40] lg:w-[432px] lg:border-none lg:px-0 lg:py-0"
		>
			<p class="caption">Please fill these details For Enquiry</p>

			<div class="flex flex-col gap-5">
				<div class="flex flex-col gap-5 lg:flex-row lg:gap-4">
					<Input placeholder="Name*" type="text" name="name" />
					<Input placeholder="E-mail address*" type="email" name="mail" />
				</div>
				<div class="relative flex">
					<div class="prefix">
						<Dubai />
						<p class="countrycode">+971</p>
					</div>
					<Input type="tel" placeholder="- phone number" className="!pl-[80px]" name="phone" />
				</div>
			</div>

			<p class="safety">
				<span>
					<Shield />
				</span>
				It is DAAf's promise to offer a strictly spam free service. We only reach out if you want us
				to.
			</p>

			<Input placeholder="How you came to know about us*" type="text" name="platform" />

			<textarea class="query" name="query" rows="6" placeholder="Write your query here*"></textarea>

			<div class="submit-button">
				<Button variant="primary" type="submit" class="lg:w-[130px]">Submit</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		overflow-y: auto;
		max-width: 100vw;
		background: linear-gradient(170deg, #e1fbdc 0%, #e1fbdc 60%, #b3da41b2 100%);
		backdrop-filter: blur(620px);
	}

	.container {
		gap: 118px;
	}

	.title {
		font-family: 'recoleta alt';
		color: #21231e;
		line-height: 120%;
	}

	.special {
		font-family: 'Inter';
		font-weight: 400;
	}

	.content {
		color: #51636f;
		line-height: 140%;
	}

	.safety {
		padding: 12px;
		display: flex;
		gap: 12px;
		border-radius: 8px;
		border: 1px solid #ffffff;
		justify-content: center;
		align-items: baseline;
		color: #69747d;
		background-color: #d9ffdc66;
		font-size: 14px;
	}

	.caption {
		color: #21231e;
		font-size: 14px;
		font-weight: 400;
	}

	.contact-form {
		box-shadow: 0px 4px 4px 0px #ffffff40 inset;
	}

	.query {
		width: 100%;
		height: 135px;
		padding: 12px;
		background-color: #fff;
		border-radius: 8px;
		border: 1px solid #d6dee6;
		outline: none;
		resize: none;
	}

	.query::placeholder {
		color: #51636f;
		opacity: 1;
		font-size: 14px;
	}

	.prefix {
		position: absolute;
		top: 13px;
		left: 12px;
		display: flex;
		gap: 4px;
		justify-content: center;
		align-items: center;
	}

	.submit-button {
		display: flex;
		justify-content: end;
	}
</style>
