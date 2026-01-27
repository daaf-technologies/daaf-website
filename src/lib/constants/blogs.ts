export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	category: string;
	author: string;
	date: string;
	lastUpdated?: string;
	description: string;
	featuredImage?: string;
	content?: string;
	tableOfContents?: Array<{ id: string; title: string }>;
}

export const blogPosts: BlogPost[] = [
	{
		id: '1',
		title: 'DAAF Tax: An all-in-one global tax compliance',
		slug: 'daaf-tax-global-tax-compliance',
		category: 'Corporate',
		author: 'Cip Blujdea',
		date: 'Aug 11, 2025',
		lastUpdated: 'August 11, 2025',
		description:
			'While businesses are rapidly building AI products, monetization remains a challenge. In this post, we share a framework for building a successful pricing strategy with key decision points on charge metrics, billing models, and guardrails.',
		featuredImage: '/images/blog-daaf-tax.png',
		tableOfContents: [
			{ id: 'overview', title: 'Overview' },
			{ id: 'experiment', title: 'The Experiment' },
			{ id: 'liftoff', title: "V8's Liftoff compiler" },
			{ id: 'takeaways', title: 'Key takeaways' },
			{ id: 'disabling', title: 'Disabling Liftoff' }
		],
		content: `While troubleshooting a performance anomaly, we discovered that V8's Liftoff compiler was causing significant slowdowns in our Node.js application. This post details our investigation and the solution we implemented.

## The experiment

We set up a controlled experiment to measure the performance impact of different compilation strategies.

### But when we ran the script, the results were surprising:

→ Running a single worker took a quite reasonable 330ms.
→ With multiple workers, performance degraded significantly.
→ The Liftoff compiler was the bottleneck.

## V8's Liftoff compiler

Liftoff is V8's baseline compiler designed for fast startup times. However, in certain scenarios, it can become a performance bottleneck, especially in long-running applications with high throughput requirements.

> Liftoff's goal is to generate code quickly, prioritizing compilation speed over execution speed. This makes it ideal for startup performance but can be problematic for hot code paths.

## Disabling Liftoff

After identifying the issue, we disabled Liftoff for our critical code paths, resulting in a 40% performance improvement.`
	},
	{
		id: '2',
		title: 'Inside the growth of the top AI companies on Stripe',
		slug: 'inside-growth-top-ai-companies-stripe',
		category: 'Engineering',
		author: 'Lauren Thomas',
		date: 'Sep 07, 2025',
		description:
			'Building scalable tax compliance solutions requires understanding complex regulations across multiple jurisdictions. Learn how we architected a platform that handles global tax requirements efficiently.',
		featuredImage: '/images/blog-featured-2.png'
	},
	{
		id: '3',
		title: 'How we built it: Jurisdiction resolution for Stripe Tax',
		slug: 'how-we-built-jurisdiction-resolution-stripe-tax',
		category: 'Software Development',
		author: 'Stephanie Neill',
		date: 'Oct 21, 2024',
		description:
			'Streamlining tax compliance across borders is challenging. Our platform consolidates multiple tax jurisdictions into a single, easy-to-use interface that simplifies complex workflows.',
		featuredImage: '/images/blog-featured-3.png'
	}
];

export const featuredBlogs = blogPosts.slice(0, 3);

export const recentBlogs = blogPosts;
