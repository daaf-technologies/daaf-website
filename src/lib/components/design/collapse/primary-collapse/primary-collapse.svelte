<script>
	import Expandable from '../expandable.svelte';
	import CompanyInformation from './company-information.svelte';
	import Contact from './contact.svelte';
	import IntellectualProperty from './intellectual-property.svelte';
	import LawJurisdiction from './law-jurisdiction.svelte';
	import LimitationLiability from './limitation-liability.svelte';
	import NoWarranties from './no-warranties.svelte';
	import TermsChange from './terms-change.svelte';
	import ToolsLinks from './tools-links.svelte';
	import WebsiteUse from './website-use.svelte';

	const items = [
		{
			id: '1',
			title: 'Company Information',
			body: CompanyInformation
		},
		{
			id: '2',
			title: 'Use of the Website',
			body: WebsiteUse
		},
		{
			id: '3',
			title: 'Intellectual Property',
			body: IntellectualProperty
		},
		{
			id: '4',
			title: 'Third-Party Tools and Links',
			body: ToolsLinks
		},
		{
			id: '5',
			title: 'No warranties',
			body: NoWarranties
		},
		{
			id: '6',
			title: 'Limitation of Liability',
			body: LimitationLiability
		},
		{
			id: '7',
			title: 'Governing Law & Jurisdiction',
			body: LawJurisdiction
		},
		{
			id: '8',
			title: 'Changes to These Terms',
			body: TermsChange
		},
		{
			id: '9',
			title: 'Contact',
			body: Contact
		}
	];
</script>

<div class="flex flex-col gap-5">
	{#each items as item}
		<Expandable id={item.id} title={item.title}>
			<svelte:component this={item.body} />
		</Expandable>
	{/each}
</div>
