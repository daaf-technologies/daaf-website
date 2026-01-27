<script lang="ts">
	import Header from '$lib/components/ui/header';

	import SecondaryCard from '$lib/components/design/card/secondary-card.svelte';
	import DummyCase from '$lib/assets/images/dummy-case.svg';
	import Button from '$lib/components/design/button/button.svelte';
</script>

<div class="wrapper">
	<Header />

	<div class="info">
		<p class="section-title">Case Study</p>

		<p class="section-description">
			From seamless integration to future-ready platforms, DAAF builds what tomorrow demands —
			today.
		</p>
	</div>

	<!-- Tabs -->

	<div class="cases">
		<SecondaryCard
			title="DAAF: An all-in-one global tax compliance solution"
			author="Stephanie Neill"
			image={DummyCase}
		/>

		<SecondaryCard
			title="DAAF: An all-in-one global tax compliance solution"
			author="Stephanie Neill"
			image={DummyCase}
		/>

		<SecondaryCard
			title="DAAF: An all-in-one global tax compliance solution"
			author="Stephanie Neill"
			image={DummyCase}
		/>

		<SecondaryCard
			title="DAAF: An all-in-one global tax compliance solution"
			author="Stephanie Neill"
			image={DummyCase}
		/>

		<SecondaryCard
			title="DAAF: An all-in-one global tax compliance solution"
			author="Stephanie Neill"
			image={DummyCase}
		/>

		<SecondaryCard
			title="DAAF: An all-in-one global tax compliance solution"
			author="Stephanie Neill"
			image={DummyCase}
		/>
	</div>

	<Button variant="primary">View all Case Studies</Button>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 24px;
	}

	.section-title {
		font-family: 'Stacion';
		color: #21231e;
		line-height: 120%;
	}

	.section-description {
		color: #51636f;
		font-weight: 500;
		line-height: 140%;
	}
	@media (max-width: 768px) {
		.wrapper {
			padding: 0 16px;
		}

		.info {
			padding: 70px 0 60px;
		}

		.section-title {
			font-size: 30px;
		}

		.section-description {
			font-size: 16px;
			width: 31ch;
		}
	}

	@media (min-width: 820px) {
		.info {
			padding: 120px 0 100px;
		}

		.section-title {
			font-size: 60px;
		}

		.section-description {
			font-size: 20px;
			width: 39ch;
		}

		.cases {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 30px;
		}
	}
</style>
