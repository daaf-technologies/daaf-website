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
	}
];

export const featuredBlogs = blogPosts.slice(0, 3);

export const recentBlogs = blogPosts;
