<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/ui/footer';
	import Header from '$lib/components/ui/header';
	import Button from '$lib/components/design/button';
	import { blogPosts, recentBlogs } from '$lib/constants/blogs';

	let slug = $derived($page.params.slug);
	let blog = $derived(slug ? blogPosts.find((b) => b.slug === slug) : null);

	// Redirect to blogs listing if slug not found
	$effect(() => {
		if (slug && !blog) {
			goto('/blogs');
		}
	});
</script>

<svelte:head>
	{#if blog}
		<title>{blog.title} | Blogs | DAAF</title>
		<meta name="description" content={blog.description} />
	{:else}
		<title>Blog | DAAF</title>
		<meta name="description" content="Blog post not found" />
	{/if}

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-L06688S0CR"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-L06688S0CR');
	</script>
</svelte:head>

{#if blog}
	<div class="blog-detail flex w-full flex-col items-center">
		<Header />

		<!-- Hero Section -->
		<div class="hero-section flex w-full flex-col items-center gap-[30px] px-4 pt-[120px]">
			<div class="flex flex-col gap-4 text-center max-w-[900px]">
				<h1 class="blog-title text-[44px] font-semibold text-[#21231E]">{blog.title}</h1>
				<p class="blog-description text-[20px] text-[#51636F]">{blog.description}</p>
			</div>

			<!-- Featured Image -->
			<div class="featured-image-container w-full max-w-[1200px] mt-8">
				{#if blog.featuredImage}
					<img
						src={blog.featuredImage}
						alt={blog.title}
						class="featured-hero-img"
					/>
				{:else}
					<div class="featured-image-placeholder bg-[#21231E] rounded-lg w-full h-[400px]"></div>
				{/if}
			</div>
		</div>

		<!-- Main Content - Two Column Layout -->
		<div class="main-content flex w-full max-w-[1200px] gap-12 px-4 py-[60px]">
			<!-- Left Sidebar -->
			<aside class="sidebar w-[280px] flex-shrink-0">
				<!-- Table of Contents -->
				<div class="toc-section">
					<h2 class="toc-title">CONTENTS</h2>
					<nav class="toc-nav">
						{#if blog.tableOfContents}
							{#each blog.tableOfContents as item}
								<a href="#{item.id}" class="toc-link">{item.id}. {item.title}</a>
							{/each}
						{:else}
							<a href="#overview" class="toc-link">1. Overview</a>
							<a href="#experiment" class="toc-link">2. The Experiment</a>
							<a href="#liftoff" class="toc-link">3. V8's Liftoff compiler</a>
							<a href="#takeaways" class="toc-link">4. Key takeaways</a>
							<a href="#disabling" class="toc-link">5. Disabling Liftoff</a>
						{/if}
					</nav>
				</div>

				<!-- Analytics Card -->
				<div class="analytics-card">
					<h3 class="analytics-title">Analytics, Simplified.</h3>
					<p class="analytics-text">
						Running into a bug? Need help with your implementation? Our team is here to help.
					</p>
					<Button variant="primary" onclick={() => goto('/contact-us')} class="contact-btn">
						Contact now
					</Button>
				</div>
			</aside>

			<!-- Right Column - Blog Content -->
			<article class="blog-content flex-1">
				<!-- Author & Date -->
				<div class="author-date">
					<span class="author-icon">👤</span>
					<span class="author-name">{blog.author}</span>
					{#if blog.lastUpdated}
						<span class="date-separator">•</span>
						<span class="last-updated">LAST UPDATED: {blog.lastUpdated.toUpperCase()}</span>
					{/if}
				</div>

				<!-- Blog Content -->
				<div class="content-body">
					{#if blog.content}
						<div class="content-html">
							{@html blog.content}
						</div>
					{:else}
						<p class="content-paragraph">
							While troubleshooting a performance anomaly, we discovered that V8's Liftoff compiler
							was causing significant slowdowns in our Node.js application. This post details our
							investigation and the solution we implemented.
						</p>

						<h2 id="experiment" class="content-heading">The experiment</h2>
						<p class="content-paragraph">
							We set up a controlled experiment to measure the performance impact of different
							compilation strategies.
						</p>

						<h3 class="content-subheading">
							But when we ran the script, the results were surprising:
						</h3>
						<p class="content-bullet">→ Running a single worker took a quite reasonable 330ms.</p>
						<p class="content-bullet">
							→ With multiple workers, performance degraded significantly.
						</p>
						<p class="content-bullet">→ The Liftoff compiler was the bottleneck.</p>

						<h2 id="liftoff" class="content-heading">V8's Liftoff compiler</h2>
						<p class="content-paragraph">
							Liftoff is V8's baseline compiler designed for fast startup times. However, in certain
							scenarios, it can become a performance bottleneck, especially in long-running
							applications with high throughput requirements.
						</p>

						<blockquote class="content-quote">
							Liftoff's goal is to generate code quickly, prioritizing compilation speed over execution
							speed. This makes it ideal for startup performance but can be problematic for hot code
							paths.
						</blockquote>

						<h2 id="disabling" class="content-heading">Disabling Liftoff</h2>
						<p class="content-paragraph">
							After identifying the issue, we disabled Liftoff for our critical code paths, resulting in
							a 40% performance improvement.
						</p>
					{/if}
				</div>
			</article>
		</div>

		<!-- Recent Blogs Section -->
		<div class="recent-blogs flex w-full flex-col items-center gap-8 px-4 pb-[60px]">
			<div class="flex w-full max-w-[1200px] items-center justify-between">
				<h2 class="recent-title text-[44px] font-semibold text-[#21231E]">Recent Blogs</h2>
				<Button variant="primary" onclick={() => goto('/blogs')} class="view-all-btn">
					View all Blogs
				</Button>
			</div>
			<div class="recent-grid flex w-full max-w-[1200px] gap-6">
				{#each recentBlogs.slice(0, 3) as recentBlog}
					<a href="/blogs/{recentBlog.slug}" class="recent-card">
						<div class="recent-image">
							<div class="recent-placeholder bg-[#21231E] rounded-lg w-full h-full"></div>
						</div>
						<div class="recent-content">
							<h3 class="recent-card-title">{recentBlog.title}</h3>
							<div class="recent-author">
								<span class="author-icon">👤</span>
								<span>{recentBlog.author}</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<Footer />
	</div>

	<style>
		.blog-detail {
			background: #ffffff;
			min-height: 100vh;
		}

		.hero-section {
			background: #ffffff;
		}

		.blog-title {
			font-family: 'recoleta alt';
			line-height: 130%;
		}

		.blog-description {
			line-height: 150%;
		}

		.featured-image-container {
			margin-top: 40px;
		}

		.featured-hero-img {
			width: 100%;
			height: 400px;
			object-fit: cover;
			object-position: center;
			border-radius: 12px;
		}

		.featured-image-placeholder {
			width: 100%;
			height: 400px;
		}

		.main-content {
			background: #ffffff;
		}

		.sidebar {
			position: sticky;
			top: 120px;
			height: fit-content;
		}

		.toc-section {
			margin-bottom: 32px;
		}

		.toc-title {
			font-size: 18px;
			font-weight: 700;
			color: #21231e;
			margin-bottom: 16px;
		}

		.toc-nav {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		.toc-link {
			font-size: 14px;
			color: #51636f;
			text-decoration: none;
			line-height: 150%;
		}

		.toc-link:hover {
			color: #21231e;
			text-decoration: underline;
		}

		.analytics-card {
			border: 1px solid #e2e2e2;
			border-radius: 12px;
			padding: 24px;
			background: #ffffff;
		}

		.analytics-title {
			font-size: 18px;
			font-weight: 600;
			color: #21231e;
			margin-bottom: 12px;
		}

		.analytics-text {
			font-size: 14px;
			line-height: 150%;
			color: #51636f;
			margin-bottom: 16px;
		}

		.contact-btn {
			width: 100%;
		}

		.blog-content {
			max-width: 700px;
		}

		.author-date {
			display: flex;
			align-items: center;
			gap: 8px;
			margin-bottom: 32px;
			font-size: 14px;
			color: #51636f;
		}

		.author-icon {
			font-size: 16px;
		}

		.date-separator {
			margin: 0 8px;
		}

		.last-updated {
			font-weight: 500;
		}

		.content-body {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}

		.content-html {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}

		.content-html :global(p) {
			font-size: 16px;
			line-height: 150%;
			color: #51636f;
			margin: 0;
		}

		.content-html :global(h2) {
			font-family: 'recoleta alt';
			font-size: 32px;
			font-weight: 600;
			color: #21231e;
			line-height: 130%;
			margin-top: 32px;
			margin-bottom: 16px;
		}

		.content-html :global(h3) {
			font-size: 20px;
			font-weight: 600;
			color: #21231e;
			line-height: 130%;
			margin-top: 24px;
			margin-bottom: 12px;
		}

		.content-html :global(blockquote) {
			margin: 24px 0;
			padding: 20px;
			border-left: 4px solid #38b543;
			background: #f9f9f9;
			font-style: italic;
			font-size: 16px;
			line-height: 150%;
			color: #51636f;
		}

		.content-paragraph {
			font-size: 16px;
			line-height: 150%;
			color: #51636f;
		}

		.content-heading {
			font-family: 'recoleta alt';
			font-size: 32px;
			font-weight: 600;
			color: #21231e;
			line-height: 130%;
			margin-top: 32px;
		}

		.content-subheading {
			font-size: 20px;
			font-weight: 600;
			color: #21231e;
			line-height: 130%;
			margin-top: 24px;
		}

		.content-quote {
			margin: 24px 0;
			padding: 20px;
			border-left: 4px solid #38b543;
			background: #f9f9f9;
			font-style: italic;
			font-size: 16px;
			line-height: 150%;
			color: #51636f;
		}

		.content-bullet {
			font-size: 16px;
			line-height: 150%;
			color: #51636f;
			display: flex;
			gap: 8px;
		}

		.recent-blogs {
			background: #ffffff;
		}

		.recent-title {
			font-family: 'recoleta alt';
		}

		.recent-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}

		.recent-card {
			width: 100%;
			background: #ffffff;
			border-radius: 12px;
			overflow: hidden;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
			transition: transform 0.2s ease, box-shadow 0.2s ease;
			cursor: pointer;
			text-decoration: none;
			display: block;
		}

		.recent-card:hover {
			transform: translateY(-4px);
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
		}

		.recent-image {
			width: 100%;
			aspect-ratio: 269 / 150;
			overflow: hidden;
		}

		.recent-placeholder {
			width: 100%;
			height: 100%;
		}

		.recent-content {
			padding: 20px;
		}

		.recent-card-title {
			font-family: 'recoleta alt';
			font-size: 20px;
			font-weight: 600;
			color: #21231e;
			line-height: 130%;
			margin-bottom: 12px;
		}

		.recent-author {
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 14px;
			color: #51636f;
		}

		.view-all-btn {
			padding: 12px 32px;
		}

		@media (min-width: 1140px) {
			.hero-section {
				padding-top: 120px;
			}

			.main-content {
				padding-top: 80px;
				padding-bottom: 80px;
			}

			.recent-blogs {
				padding-top: 60px;
				padding-bottom: 80px;
			}
		}
	</style>
{/if}
