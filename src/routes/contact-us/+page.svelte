<script lang="ts">
	import emailjs from '@emailjs/browser';

	import { Dubai, Location, Shield } from '$lib/assets/icons';
	import Button from '$lib/components/design/button';
	import Input from '$lib/components/design/input';
	import Footer from '$lib/components/ui/footer';
	import Header from '$lib/components/ui/header';
	import SuccessModal from '$lib/components/ui/success-modal/success-modal.svelte';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let platform = $state('');
	let query = $state('');

	let isOpen = $state(false);
	let sending = $state(false);
	let canSubmit = $derived(
		name.trim() !== '' &&
			email.trim() !== '' &&
			phone.trim() !== '' &&
			platform.trim() !== '' &&
			query.trim() !== ''
	);

	const SERVICE_ID = 'service_ykodhvi';
	const TEMPLATE_ID = 'template_zj2toew';
	const PUBLIC_KEY = '1PHWpWGFxUgsQ1ojw';

	const sendEmail = async (e: SubmitEvent) => {
		e.preventDefault();

		const form = e.currentTarget as HTMLFormElement;

		if (sending) return;
		try {
			sending = true;
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
			console.log('SUCCESS!');
			isOpen = true;
			form.reset();
			name = email = phone = platform = query = '';
		} catch (error: any) {
			console.log('FAILED...', error?.text ?? error);
		} finally {
			sending = false;
		}
	};
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-L06688S0CR"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-L06688S0CR');
	</script>
</svelte:head>

<div class="h-full w-full">
	<div
		class="wrapper flex h-full max-w-full flex-col items-center overflow-y-auto px-4 py-[50px] backdrop-blur-[620px] md:px-[60px] lg:gap-[140px] lg:px-[90px]"
	>
		<Header />
		<div
			class="content md:flex md:gap-[50px] md:pt-[60px] lg:gap-[40px] lg:pb-[100px] xl:gap-[118px]"
		>
			<div
				class="description flex flex-col gap-3 pt-[70px] pb-[40px] md:w-[250px] md:pt-0 md:pb-0 lg:w-fit lg:gap-5 xl:w-[530px]"
			>
				<div
					class="title text-center text-[30px] leading-[120%] font-semibold text-[#21231e] md:w-[10ch] md:text-left md:leading-[120%] md:tracking-[-2px] lg:text-left lg:text-[40px] xl:text-[50px]"
				>
					Whether it’s a small step or a bold idea <span class="special font-normal">-</span> the
					<p class="md:w-[12ch]">door’s always open</p>
				</div>
				<div
					class="text-center text-[16px] leading-[140%] font-medium text-[#696969] md:w-[26ch] md:text-left md:text-[14px] md:leading-[150%] md:font-normal lg:text-left lg:text-[20px] xl:text-[22px]"
				>
					One message is all it takes to set your vision in motion. Let's create the solutions your
					business needs to thrive today and tomorrow.
				</div>

				<div
					class="flex flex-col items-center gap-3 py-4 text-center text-[14px] leading-[140%] text-[#51636f] md:items-start lg:items-start lg:text-left lg:text-[20px]"
				>
					<div class="flex items-center gap-1">
						<Location />
						<p class="location text-base tracking-[15%] text-nowrap text-[#EA6C18]">
							LOCATE US AT:
						</p>
					</div>

					<p
						class="lg-text-base w-[26ch] text-center text-base text-[#696969] md:text-left md:text-sm"
					>
						Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
					</p>
				</div>
			</div>

			<form
				onsubmit={sendEmail}
				aria-busy={sending}
				class="contact-form flex flex-col gap-5 rounded-xl border border-[#C4C8CC] px-4 py-6 md:border-none md:px-0 md:py-0 lg:w-[432px] lg:border-none lg:px-0 lg:py-0"
			>
				<p class="text-sm font-normal text-[#21231e]">Please fill these details For Enquiry</p>

				<div class="flex flex-col gap-5">
					<div class="flex flex-col gap-5 md:flex-row lg:flex-row lg:gap-4">
						<div class="name">
							<Input
								placeholder="Name*"
								type="text"
								name="name"
								bind:value={name}
								disabled={sending}
							/>
						</div>

						<div class="email">
							<Input
								placeholder="E-mail address*"
								type="email"
								name="email"
								bind:value={email}
								disabled={sending}
							/>
						</div>
					</div>
					<div class="phone relative flex">
						<div class="absolute top-[13px] left-[12px] flex items-center justify-center gap-1">
							<Dubai />
							<p class="countrycode">+971 -</p>
						</div>
						<Input
							type="tel"
							placeholder="Phone number*"
							className="!pl-[90px]"
							name="phone"
							bind:value={phone}
							disabled={sending}
						/>
					</div>
				</div>

				<p
					class="promise flex items-baseline justify-center gap-3 rounded-lg border border-white bg-[#d9ffdc66] p-3 text-sm text-[#69747d] md:w-[400px]"
				>
					<span>
						<Shield />
					</span>
					It is DAAf's promise to offer a strictly spam free service. We only reach out if you want us
					to.
				</p>

				<div class="platform">
					<Input
						placeholder="How you came to know about us*"
						type="text"
						name="platform"
						bind:value={platform}
						disabled={sending}
					/>
				</div>

				<textarea
					class="query h-[135px] w-full resize-none rounded-lg border border-[#d6dee6] bg-white p-3 outline-none placeholder:text-sm placeholder:text-[#51636f] placeholder:opacity-100"
					name="query"
					rows="6"
					placeholder="Write your query here*"
					bind:value={query}
					disabled={sending}
				></textarea>

				<div class="flex justify-end">
					<Button
						variant="primary"
						type="submit"
						class="lg:w-[130px]"
						disabled={!canSubmit || sending}>{sending ? 'Submitting...' : 'Submit'}</Button
					>
				</div>
			</form>
		</div>
	</div>

	<Footer />

	<SuccessModal {isOpen} />
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

	.location {
		font-family: 'Departure Mono';
	}

	@media (max-width: 360px) and (max-width: 768px) {
		.wrapper {
			padding: 8px;
		}
	}

	@media (width: 768px) {
		/* .content {
			padding-bottom: 0;
		} */
		.name {
			width: 150px;
		}

		.email {
			width: 150px;
		}
		.phone {
			max-width: 324px !important;
		}

		.promise {
			max-width: 324px !important;
		}

		.platform {
			max-width: 324px !important;
		}

		.query {
			max-width: 324px;
		}
	}

	@media (min-width: 820px) {
		.phone {
			min-width: 400px !important;
		}

		.query {
			min-width: 400px;
		}
	}
</style>
