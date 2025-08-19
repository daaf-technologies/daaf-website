<script lang="ts">
	import Expandable from '../expandable.svelte';
	import CollectData from './collect-data.svelte';
	import ContactUs from './contact-us.svelte';
	import CookiesAnalytics from './cookies-analytics.svelte';
	import DataSecurity from './data-security.svelte';
	import DataTransfer from './data-transfer.svelte';
	import LegalProcessing from './legal-processing.svelte';
	import PolicyCover from './policy-cover.svelte';
	import PolicyUpdate from './policy-update.svelte';
	import ShareData from './share-data.svelte';
	import StorageRetention from './storage-retention.svelte';
	import UseData from './use-data.svelte';
	import WhoWeAre from './who-we-are.svelte';
	import YourRights from './your-rights.svelte';

	let items = [
		{
			id: '1',
			title: 'Who we are',
			body: WhoWeAre
		},
		{
			id: '2',
			title: 'What This Policy Covers',
			body: PolicyCover
		},
		{
			id: '3',
			title: 'What Data We Collect',
			body: CollectData
		},
		{
			id: '4',
			title: 'How We Use Your Data',
			body: UseData
		},

		{
			id: '5',
			title: 'Legal Basis for Processing (UAE DPL 2021)',
			body: LegalProcessing
		},
		{
			id: '6',
			title: 'Data Storage and Retention',
			body: StorageRetention
		},
		{
			id: '7',
			title: 'Cookies and Analytics',
			body: CookiesAnalytics
		},
		{
			id: '8',
			title: 'Who We Share Data With',
			body: ShareData
		},
		{
			id: '9',
			title: 'International Data Transfers',
			body: DataTransfer
		},
		{
			id: '10',
			title: 'Your Rights (Under UAE Law)',
			body: YourRights
		},
		{
			id: '11',
			title: 'Data Security',
			body: DataSecurity
		},
		{
			id: '12',
			title: 'Updates to This Policy',
			body: PolicyUpdate
		},
		{
			id: '13',
			title: 'Contact Us',
			body: ContactUs
		}
	];
</script>

<div class="flex flex-col gap-5">
	{#each items as item}
		<Expandable id={item.id} title={item.title}>
			<!-- {@html item.body} -->
			<!-- <svelte:component this={item.body} /> -->

			{@const Body = item.body}
			<Body />
		</Expandable>
	{/each}
</div>
