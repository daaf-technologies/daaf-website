import { CheckSquareBroken, CodeBrowser, Diamond, FileCode, GitBranch } from '$lib/assets/icons';
import Card from '$lib/components/ui/card.svelte';
import { services } from './services';

export const tabs = [
	{
		label: 'Plugin & Micro‑App Dev',
		icon: Diamond,
		content: {
			component: Card,
			props: services[0]
		}
	},
	{
		label: 'Legacy Migration Factory',
		icon: FileCode,
		content: {
			component: Card,
			props: services[1]
		}
	},
	{
		label: 'Full‑Stack Engineering',
		icon: CodeBrowser,
		content: {
			component: Card,
			props: services[2]
		}
	},
	{
		label: 'AI MCP Setup',
		icon: GitBranch,
		content: {
			component: Card,
			props: services[3]
		}
	},
	{
		label: 'Quality Engineering 2.0',
		icon: CheckSquareBroken,
		content: {
			component: Card,
			props: services[4]
		}
	}
];
