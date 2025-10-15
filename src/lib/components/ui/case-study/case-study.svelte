<script lang="ts">
	import Header from '$lib/components/ui/header';

	import SecondaryCard from '$lib/components/design/card/secondary-card.svelte';
	import DummyCase from '$lib/assets/images/dummy-case.svg';
</script>

<div class="wrapper">
	<Header />
	<p class="section-title">Case Study</p>

	<p class="section-description">
		From seamless integration to future-ready platforms, DAAF builds what tomorrow demands — today.
	</p>

	<!-- Tabs -->

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
