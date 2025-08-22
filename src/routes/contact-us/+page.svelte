<script>
	import { Dubai, Shield } from '$lib/assets/icons';
	import Button from '$lib/components/design/button';
	import Input from '$lib/components/design/input';
	import Header from '$lib/components/ui/header';
</script>

<div class="contact-wrapper">
	<Header minimal={true} className="header" />
	<div class="container">
		<div class="description">
			<div class="title">
				Whether it’s a small step or a bold idea <span class="special">-</span> the door’s always open
			</div>
			<div class="content">
				One message is all it takes to set your vision in motion. Let's create the solutions your
				business needs to thrive today and tomorrow.
			</div>
		</div>

		<div class="contact-form">
			<p class="caption">Please fill these details For Enquiry</p>

			<div class="contacts">
				<div class="details">
					<Input placeholder="Name*" type="text" name="name" />
					<Input placeholder="E-mail address*" type="email" name="mail" />
				</div>
				<div class="telephone-number">
					<div class="prefix">
						<Dubai />
						<p class="countrycode">+971</p>
					</div>
					<Input type="tel" placeholder="- phone number" className="phone" name="phone" />
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
				<Button variant="primary" type="submit" class="submit">Submit</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.contact-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 140px;
		background-color: #e1fbdc;
		height: 100vh;
		max-width: 100vw;
		padding: 50px 200px;
		background: linear-gradient(170deg, #e1fbdc 0%, #e1fbdc 60%, #b3da41b2 100%);
		backdrop-filter: blur(620px);
	}

	:global(.header) {
		width: 646px;
	}

	.container {
		display: flex;
		gap: 118px;
	}

	.description {
		width: 530px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.title {
		font-family: 'recoleta alt';
		color: #21231e;
		font-size: 50px;
		font-weight: 600;
		line-height: 120%;
	}

	.special {
		font-family: 'Inter';
		font-weight: 400;
	}

	.content {
		font-size: 22px;
		font-weight: 500;
		color: #51636f;
		line-height: 140%;
	}

	.details {
		display: flex;
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

	.contacts {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.details {
		display: flex;
		gap: 16px;
	}

	.caption {
		color: #21231e;
		font-size: 14px;
		font-weight: 400;
	}

	.contact-form {
		width: 432px;
		display: flex;
		flex-direction: column;
		gap: 20px;
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

	.telephone-number {
		position: relative;
		display: flex;
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

	:global(.submit) {
		width: 130px;
	}

	:global(.phone) {
		padding-left: 80px !important;
	}

	@media (max-width: 480px) {
		:global(.header) {
			width: 343px;
		}
	}
</style>
