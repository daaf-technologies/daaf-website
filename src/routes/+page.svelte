<script>
	import Button from '$lib/components/design/button/button.svelte';
	import Header from '$lib/components/ui/header';
	import ComingSoon from '$lib/assets/images/coming-soon.svg';
</script>

<div class="wrapper">
	<div class="header">
		<Header minimal={true} className="header" />
	</div>

	<div class="body">
		<div class="mascot">
			<img src={ComingSoon} alt="mascot" height="60" width="60" />
		</div>

		<div class="text">
			<p class="title">
				<span class="first-letter"> C </span>oming
				<span class="first-letter"> S </span>oon
			</p>
			<p class="content">Get ready everyone! We are currently working on something awesome</p>
		</div>

		<div class="mail">
			<input placeholder="Email address" class="input" name="email" autocomplete="email" />
			<Button variant="primary" type="submit" class="button">Notify me</Button>
		</div>
	</div>
</div>

<style>
	.wrapper {
		background: linear-gradient(170deg, #e1fbdc 0%, #e1fbdc 60%, #b3da41b2 100%);
		backdrop-filter: blur(620px);
		width: 100vw;
		height: 100%;
		padding: 50px 0 200px;
		display: flex;
		gap: 190px;
		flex-direction: column;
		align-items: center;
		height: 100vh;
	}

	.header {
		width: 646px;
	}

	.mail {
		position: relative;
	}

	.input {
		width: 420px;
		padding: 20px;
		border: 1px solid #c4c8cc;
		background-color: #ffffff;
		border-radius: 40px;
	}

	.input:focus {
		outline: none;
	}

	:global(.button) {
		position: absolute;
		width: 120px;
		border-radius: 20px !important;
		padding: 10px 26px;
		top: 12px;
		right: 10px;
	}

	.title {
		font-size: 40px;
		font-weight: 500;
	}

	.content {
		font-size: 20px;
		color: #65755f;
		width: 380px;
	}

	.text {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 16px;
		justify-content: center;
		align-items: center;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 30px;
		justify-content: center;
		align-items: center;
	}

	.first-letter {
		font-family: 'Departure mono';
		font-weight: 400;
	}

	@media (max-width: 480px) {
		.wrapper {
			padding: 16px;
			display: flex;
			flex-direction: column;
			gap: 160px;
		}

		:global(.header) {
			width: 343px !important;
			gap: 72px !important;
		}

		.input {
			width: 343px;
		}

		.title {
			font-size: 30px;
			font-weight: 500;
		}

		.first-letter {
			font-weight: 400;
		}

		.content {
			font-size: 16px;
			width: 280px;
		}

		.mail::placeholder {
			font-size: 14px;
		}
	}
</style>
