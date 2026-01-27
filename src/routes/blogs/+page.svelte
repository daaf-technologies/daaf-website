<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/ui/footer';
	import GetInTouch from '$lib/components/ui/get-in-touch';
	import Header from '$lib/components/ui/header';
	import Button from '$lib/components/design/button';
	import { blogPosts } from '$lib/constants/blogs';
	import BlogCardPricingScale from '$lib/assets/images/blog-card-pricing-scale.png';
	import BlogCardBuildEmails from '$lib/assets/images/blog-card-build-emails.png';
	import BlogCardEmailDeliverability from '$lib/assets/images/blog-card-email-deliverability.png';

	const blogCardImages = [BlogCardPricingScale, BlogCardBuildEmails, BlogCardEmailDeliverability];

	/** Featured: 1 real blog (DAAF Tax, links) + 2 image-only cards (no navigation) */
	const featuredCards = [
		{ type: 'blog' as const, blog: blogPosts[0] },
		{ type: 'placeholder' as const, image: BlogCardPricingScale, title: 'Pricing Plan Scale' },
		{ type: 'placeholder' as const, image: BlogCardBuildEmails, title: 'The new way to build emails' }
	];

	const filters = [
		'All Blogs',
		'Corporate',
		'Engineering',
		'Industry',
		'Product',
		'Artificial Intelligent',
		'Quality Test',
		'Software Development'
	];

	let selectedFilter = $state('All Blogs');

	let filteredBlogs = $derived(
		selectedFilter === 'All Blogs'
			? blogPosts
			: blogPosts.filter((blog) => blog.category === selectedFilter)
	);
</script>

<svelte:head>
	<title>Blogs | DAAF - Enterprise Software Solutions</title>
	<meta
		name="description"
		content="Read insights from DAAF on enterprise software, AI, cloud solutions, tax compliance, and modern software development practices."
	/>

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

<div class="blogs-page flex w-full flex-col items-center">
	<!-- First section: green gradient; includes Header + title + subtitle + featured cards -->
	<div class="hero-section flex w-full flex-col items-center gap-[30px] px-4">
		<Header />
		<div class="flex flex-col gap-3 text-center max-w-[900px]">
			<h1 class="hero-title text-[44px] font-semibold text-[#21231E]">Blogs</h1>
			<p class="hero-subtitle text-[20px] text-[#51636F]">
				From seamless integration to future-ready platforms, DAAF builds what tomorrow demands —
				today.
			</p>
		</div>

		<!-- Featured: DAAF Tax (link) + 2 image-only cards (no link) -->
		<div class="featured-blogs flex w-full max-w-[1200px] gap-6 px-4 mt-8">
			{#each featuredCards as card}
				{#if card.type === 'blog'}
					<a href="/blogs/{card.blog.slug}" class="featured-card">
						<div class="featured-image">
							<img
								src={card.blog.featuredImage || blogCardImages[0]}
								alt={card.blog.title}
								class="featured-img"
							/>
						</div>
					</a>
				{:else}
					<div class="featured-card featured-card--no-link">
						<div class="featured-image">
							<img src={card.image} alt={card.title} class="featured-img" />
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<!-- Beyond the Call Section -->
	<div class="beyond-section flex w-full flex-col items-center gap-8 px-4">
		<div class="flex flex-col gap-4 text-center max-w-[900px]">
			<p class="beyond-label text-[14px] uppercase tracking-wider text-[#51636F]">
				BEYOND THE CALL
			</p>
			<h2 class="beyond-title text-[44px] font-semibold text-[#21231E]">
				Speak directly to the people who <span class="font-bold">plan</span> and
				<span class="font-bold">build</span> your solutions
			</h2>
		</div>

		<!-- Filters -->
		<div class="filters-container flex w-full max-w-[1200px] flex-wrap justify-center gap-3">
			{#each filters as filter}
				<button
					class="filter-btn"
					class:active={selectedFilter === filter}
					onclick={() => (selectedFilter = filter)}
				>
					{filter}
				</button>
			{/each}
		</div>
	</div>

	<!-- Blog Listings: mobile = stacked (text, author+date, image); desktop = two columns -->
	<div class="blog-listings flex w-full max-w-[1200px] px-4">
		{#each filteredBlogs as blog, i}
			<article class="blog-summary">
				<div class="category-tag" data-category={blog.category.toLowerCase()}>
					{blog.category.toUpperCase()}
				</div>
				<h3 class="blog-title">
					<a href="/blogs/{blog.slug}">{blog.title}</a>
				</h3>
				<p class="blog-description">{blog.description}</p>
				<a href="/blogs/{blog.slug}" class="read-more-btn">Read More</a>
				<div class="card-author-date">
					<span class="author-icon">👤</span>
					<span>{blog.author} → {blog.date}</span>
				</div>
			</article>
			<div class="blog-card-wrapper">
				<a href="/blogs/{blog.slug}" class="blog-card">
					<div class="card-image">
						<img
							src={blog.featuredImage || (blogCardImages[i] ?? blogCardImages[0])}
							alt={blog.title}
							class="card-img"
						/>
					</div>
				</a>
			</div>
		{/each}
	</div>

	<!-- View all Blogs Button -->
	<div class="view-all-section flex w-full justify-center pb-[60px]">
		<Button variant="primary">View all Blogs</Button>
	</div>

	<GetInTouch />
	<Footer />
</div>

<style>
	.blogs-page {
		background: #ffffff;
		min-height: 100vh;
	}

	/* Only the first (hero) section: linear gradient #E1FBDC → #FFFFFF */
	.hero-section {
		background: linear-gradient(160deg, #E1FBDC 0%, #FFFFFF 100%);
		padding-top: 24px;
		padding-bottom: 40px;
	}

	.hero-title {
		font-family: 'recoleta alt';
		line-height: 130%;
	}

	.hero-subtitle {
		line-height: 150%;
	}

	.featured-blogs {
		display: grid;
		grid-template-columns: 1fr;
		gap: 16px;
	}

	.featured-card {
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

	.featured-card:hover {
		transform: translateY(-4px);
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
	}

	.featured-card--no-link {
		cursor: default;
		pointer-events: none;
	}

	.featured-card--no-link:hover {
		transform: none;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	}

	.featured-image {
		width: 100%;
		aspect-ratio: 269 / 150;
		overflow: hidden;
	}

	.featured-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.beyond-section {
		background: #ffffff;
		padding-top: 40px;
		padding-bottom: 40px;
	}

	.beyond-label {
		font-weight: 500;
		letter-spacing: 0.1em;
	}

	.beyond-title {
		font-family: 'recoleta alt';
		line-height: 130%;
	}

	.filter-btn {
		padding: 10px 20px;
		border-radius: 20px;
		border: 1px solid #e2e2e2;
		background: #ffffff;
		color: #51636f;
		font-size: 14px;
		font-weight: 400;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.filter-btn:hover {
		border-color: #38b543;
		background: #f0f9f1;
	}

	.filter-btn.active {
		background: #21231e;
		color: #ffffff;
		border-color: #21231e;
	}

	.blog-listings {
		background: #ffffff;
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding-top: 40px;
		padding-bottom: 48px;
	}

	.blog-summary {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding-bottom: 0;
	}

	.category-tag {
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.category-tag[data-category='corporate'],
	.category-tag[data-category='engineering'] {
		color: #ff6b6b;
	}

	.category-tag[data-category='software development'] {
		color: #38b543;
	}

	.category-tag:not([data-category='corporate']):not([data-category='engineering']):not([data-category='software development']) {
		color: #38b543;
	}

	.blog-title {
		font-family: 'recoleta alt';
		font-size: 32px;
		font-weight: 600;
		color: #21231e;
		line-height: 130%;
	}

	.blog-title a {
		color: inherit;
		text-decoration: none;
	}

	.blog-title a:hover {
		text-decoration: underline;
	}

	.blog-description {
		font-size: 16px;
		line-height: 150%;
		color: #51636f;
	}

	.read-more-btn {
		display: inline-block;
		padding: 10px 20px;
		font-size: 16px;
		color: #21231e;
		text-decoration: none;
		border: 1px solid #21231e;
		border-radius: 4px;
		background: #ffffff;
		transition: all 0.2s ease;
		width: fit-content;
	}

	.read-more-btn:hover {
		background: #21231e;
		color: #ffffff;
	}

	.blog-card-wrapper {
		display: block;
	}

	.blog-card {
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

	.blog-card:hover {
		transform: translateY(-4px);
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
	}

	.card-image {
		width: 100%;
		aspect-ratio: 269 / 150;
		overflow: hidden;
	}

	.card-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.card-author-date {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		color: #51636f;
		padding-left: 4px;
	}

	.author-icon {
		font-size: 16px;
	}

	.view-all-section {
		padding-top: 24px;
		padding-bottom: 48px;
	}

	@media (min-width: 820px) {
		.hero-section {
			padding-top: 32px;
			padding-bottom: 60px;
		}

		.featured-blogs {
			grid-template-columns: repeat(3, 1fr);
			gap: 24px;
		}

		.beyond-section {
			padding-top: 60px;
			padding-bottom: 60px;
		}

		.blog-listings {
			display: grid;
			grid-template-columns: 1fr 400px;
			gap: 48px;
			padding-top: 60px;
			padding-bottom: 80px;
		}

		.blog-listings > *:nth-child(odd) {
			grid-column: 1;
		}

		.blog-listings > *:nth-child(even) {
			grid-column: 2;
		}

		.blog-listings > *:nth-child(1),
		.blog-listings > *:nth-child(2) {
			grid-row: 1;
		}

		.blog-listings > *:nth-child(3),
		.blog-listings > *:nth-child(4) {
			grid-row: 2;
		}

		.blog-listings > *:nth-child(5),
		.blog-listings > *:nth-child(6) {
			grid-row: 3;
		}

		.blog-summary {
			max-width: 700px;
		}

		.view-all-section {
			padding-top: 32px;
			padding-bottom: 60px;
		}
	}

	@media (min-width: 1024px) {
		.hero-section {
			padding-top: 40px;
			padding-bottom: 80px;
		}

		.beyond-section {
			padding-top: 100px;
			padding-bottom: 80px;
		}

		.blog-listings {
			padding-top: 80px;
			padding-bottom: 100px;
		}

		.view-all-section {
			padding-top: 40px;
			padding-bottom: 80px;
		}
	}
</style>
