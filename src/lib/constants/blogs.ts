import BlogCardEmailDeliverability from '$lib/assets/images/blog-card-email-deliverability.png';
import BlogCardBuildEmails from '$lib/assets/images/blog-card-build-emails.png';
import BlogCardPricingScale from '$lib/assets/images/blog-card-pricing-scale.png';

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
		featuredImage: BlogCardEmailDeliverability,
		tableOfContents: [
			{ id: 'overview', title: 'Overview' },
			{ id: 'experiment', title: 'The Experiment' },
			{ id: 'liftoff', title: "V8's Liftoff compiler" },
			{ id: 'takeaways', title: 'Key takeaways' },
			{ id: 'disabling', title: 'Disabling Liftoff' }
		],
		content: `<h2 id="overview">Overview</h2>
<p>While troubleshooting a performance anomaly in our Node.js application, we discovered unexpected slowdowns when running multiple worker threads. The issue led us deep into WebAssembly execution and V8's compiler optimizations.</p>
<p>We had developed a custom JavaScript runtime for the secure execution of untrusted third-party code. The runtime uses QuickJS for JavaScript and WebAssembly (WASM) for isolation and performance-critical paths. As we scaled the number of worker threads, execution times became wildly inconsistent.</p>

<h2 id="experiment">The experiment</h2>
<p>We set up an experiment to measure the performance impact of parallelization. Each worker would spawn its own runtime context and run a simple loop to assess whether we could benefit from multi-threaded execution.</p>
<figure class="content-embedded-image">
	<img src="/images/blog-embed-verification-apis.png" alt="Top Email Verification APIs" />
</figure>
<h3>But when we ran the script, the results were surprising:</h3>
<p class="content-bullet">→ Running a single worker took a quite reasonable 330ms.</p>
<p class="content-bullet">→ Running four workers made each worker's individual execution time balloon to 4053ms.</p>
<p class="content-bullet">→ Cutting the worker count to two reduced execution time to 1200ms per worker.</p>
<p>The parallelization we expected to help was making things worse. Adding more workers increased per-worker execution time instead of dividing the load. We needed to understand why.</p>

<h2 id="liftoff">V8's Liftoff compiler</h2>
<p>We dug into V8's documentation. The unpredictable performance and the link between worker count and execution time pointed to how V8 compiles WebAssembly.</p>
<blockquote>The goal of Liftoff is to reduce startup time for WebAssembly-based apps by generating code as fast as possible. Code quality is secondary.</blockquote>
<p>Liftoff is V8's baseline compiler for WebAssembly. It prioritizes compilation speed over the quality of the generated code. In our scenario, with multiple runtimes and repeated WASM execution, that trade-off worked against us.</p>

<h2 id="takeaways">Key takeaways</h2>
<p>Liftoff can be a bottleneck when running many WebAssembly instances in parallel. If you see execution time grow with the number of workers, V8's compilation strategy is a likely cause. Disabling Liftoff for hot WASM paths can restore predictable, faster performance.</p>

<h2 id="disabling">Disabling Liftoff</h2>
<p>We ran an experiment: we disabled Liftoff using a V8 flag in Node.js. The inconsistent execution times disappeared. Workers scaled as we had originally expected.</p>
<p>If you hit similar behaviour with Node.js, WebAssembly, and worker threads, try turning off Liftoff for your critical code paths. In our case, it resolved the anomaly and gave us the performance profile we needed.</p>`
	},
	{
		id: '2',
		title: 'Inside the growth of the top AI companies on Stripe',
		slug: 'inside-the-growth-of-top-ai-companies-on-stripe',
		category: 'Engineering',
		author: 'Lauren Thomas',
		date: 'Sep 07, 2025',
		description:
			'While businesses are rapidly building AI products, monetization remains a challenge. In this post, we share a framework for building a successful pricing strategy with key decision points on charge metrics, billing models, and guardrails.',
		featuredImage: BlogCardBuildEmails,
		tableOfContents: [
			{ id: 'context', title: 'Market context' },
			{ id: 'patterns', title: 'Growth patterns' },
			{ id: 'billing', title: 'Billing and scale' },
			{ id: 'takeaways', title: 'Takeaways' }
		],
		content: `<h2 id="context">Market context</h2>
<p>AI-native companies are scaling faster than traditional SaaS benchmarks. We looked at how leading teams use payments infrastructure to support usage-based models, enterprise contracts, and global expansion.</p>

<h2 id="patterns">Growth patterns</h2>
<p>High-growth AI businesses tend to combine product-led adoption with disciplined revenue operations. Clear packaging, transparent metering, and reliable invoicing reduce friction as deal sizes grow.</p>

<h2 id="billing">Billing and scale</h2>
<p>As volume and geography diversify, billing systems must handle partial periods, credits, and tax without slowing product velocity. The teams we studied invested early in data quality and reconciliation.</p>

<h2 id="takeaways">Takeaways</h2>
<p>Strong monetization is as much an engineering problem as a go-to-market one. Instrument usage early, align finance and product on metrics, and choose infrastructure that can evolve with your pricing.</p>`
	},
	{
		id: '3',
		title: 'How we built it: Jurisdiction resolution for Stripe Tax',
		slug: 'jurisdiction-resolution-stripe-tax',
		category: 'Software Development',
		author: 'Stephanie Neill',
		date: 'Oct 21, 2024',
		description:
			'While businesses are rapidly building AI products, monetization remains a challenge. In this post, we share a framework for building a successful pricing strategy with key decision points on charge metrics, billing models, and guardrails.',
		featuredImage: BlogCardPricingScale,
		tableOfContents: [
			{ id: 'problem', title: 'The problem' },
			{ id: 'design', title: 'Design' },
			{ id: 'implementation', title: 'Implementation' },
			{ id: 'results', title: 'Results' }
		],
		content: `<h2 id="problem">The problem</h2>
<p>Tax jurisdiction rules vary by country, product type, and customer location. We needed a resolution layer that was fast, explainable, and safe to extend as regulations changed.</p>

<h2 id="design">Design</h2>
<p>We separated rule data from evaluation logic, versioned rule sets, and added tracing so support and compliance could see why a given transaction received a specific treatment.</p>

<h2 id="implementation">Implementation</h2>
<p>The service runs deterministic checks first, then falls back to configurable heuristics where the data model allows ambiguity. Automated tests cover edge cases drawn from real production incidents.</p>

<h2 id="results">Results</h2>
<p>Latency stayed within our SLOs while accuracy improved quarter over quarter. Teams can ship new regions without redeploying the core engine—only the rule bundles need updates.</p>`
	}
];

export const featuredBlogs = blogPosts.slice(0, 3);

export const recentBlogs = blogPosts;
