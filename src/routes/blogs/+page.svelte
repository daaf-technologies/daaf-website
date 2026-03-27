<script lang="ts">
	import Footer from '$lib/components/ui/footer';
	import GetInTouch from '$lib/components/ui/get-in-touch';
	import Header from '$lib/components/ui/header';
	import Button from '$lib/components/design/button';
	import { blogPosts, type BlogPost } from '$lib/constants/blogs';
	import BlogCardPricingScale from '$lib/assets/images/blog-card-pricing-scale.png';
	import BlogCardBuildEmails from '$lib/assets/images/blog-card-build-emails.png';
	import BlogCardEmailDeliverability from '$lib/assets/images/blog-card-email-deliverability.png';

	const blogCardImages = [BlogCardPricingScale, BlogCardBuildEmails, BlogCardEmailDeliverability];

	type FeaturedCard =
		| { type: 'blog'; blog: BlogPost }
		| { type: 'placeholder'; image: string; title: string };

	/** Featured row: three posts (matches listing hero) */
	const featuredCards: FeaturedCard[] = [
		{ type: 'blog', blog: blogPosts[0] },
		{ type: 'blog', blog: blogPosts[1] },
		{ type: 'blog', blog: blogPosts[2] }
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
		<div class="flex flex-col gap-3 text-center">
			<h1 class="hero-title text-[44px] text-[#21231E]">Blogs</h1>
			<p class="hero-subtitle text-[20px] text-[#51636F]">
				From seamless integration to future-ready platforms, DAAF builds what tomorrow demands —
				today.
			</p>
		</div>

		<!-- Featured: three blog posts -->
		<div class="featured-blogs mt-8 flex w-full max-w-[1200px] gap-6 px-4">
			{#each featuredCards as card, i (i)}
				{#if card.type === 'blog'}
					{#if card.blog.detailEnabled}
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
								<img
									src={card.blog.featuredImage || blogCardImages[0]}
									alt={card.blog.title}
									class="featured-img"
								/>
							</div>
						</div>
					{/if}
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
	<div class="beyond-section flex w-full flex-col gap-8 px-4">
		<div class="flex max-w-[900px] flex-col gap-4">
			<p class="beyond-label text-[14px] tracking-wider text-[#51636F] uppercase">
				BEYOND THE CALL
			</p>
			<h2 class="beyond-title text-[44px] font-medium text-[#21231E]">
				Speak directly to the people who <span class="font-[stacion] font-light"
					>plan and build</span
				> your solutions
			</h2>
		</div>

		<!-- Filters -->
		<div class="filters-container flex w-full flex-wrap gap-x-1 gap-y-5 text-nowrap">
			{#each filters as filter (filter)}
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
	<div class="blog-listings flex w-full px-4">
		{#each filteredBlogs as blog, i (blog.slug)}
			<article class="blog-summary">
				<div class="category-tag" data-category={blog.category.toLowerCase()}>
					{blog.category.toUpperCase()}
				</div>
				<h3 class="blog-title">
					{#if blog.detailEnabled}
						<a href="/blogs/{blog.slug}">{blog.title}</a>
					{:else}
						<span>{blog.title}</span>
					{/if}
				</h3>
				<p class="blog-description">{blog.description}</p>
				{#if blog.detailEnabled}
					<a href="/blogs/{blog.slug}" class="read-more-btn">Read More</a>
				{:else}
					<span class="read-more-btn read-more-btn--disabled">Coming soon</span>
				{/if}
			</article>
			<div class="blog-card-wrapper">
				<div class="card-author-date">
					<span class="author-icon">👤</span>
					<span>{blog.author} → {blog.date}</span>
				</div>
				{#if blog.detailEnabled}
					<a href="/blogs/{blog.slug}" class="blog-card">
						<div class="card-image">
							<img
								src={blog.featuredImage || (blogCardImages[i] ?? blogCardImages[0])}
								alt={blog.title}
								class="card-img"
							/>
						</div>
					</a>
				{:else}
					<div class="blog-card blog-card--no-link">
						<div class="card-image">
							<img
								src={blog.featuredImage || (blogCardImages[i] ?? blogCardImages[0])}
								alt={blog.title}
								class="card-img"
							/>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<!-- View all Blogs Button -->
	<div class="view-all-section flex w-full pb-[60px]">
		<Button variant="primary" class="view-all-button w-full text-nowrap md:w-[150px]"
			>View all Blogs</Button
		>
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
		background: linear-gradient(160deg, #e1fbdc 0%, #ffffff 100%);
		padding-top: 24px;
		padding-bottom: 40px;
	}

	.hero-title {
		font-family: 'Stacion';
		line-height: 130%;
		font-size: 30px;
		padding-top: 40px;
	}

	.hero-subtitle {
		line-height: 150%;
		width: 35ch;
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
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
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
		font-family: 'Departure Mono';
		font-weight: 500;
		letter-spacing: 0.1em;
	}

	.beyond-title {
		font-family: 'Inter Variable';
		line-height: 130%;
	}

	.filter-btn {
		padding: 10px 12px;
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
		font-family: 'Departure Mono';
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

	.category-tag:not([data-category='corporate']):not([data-category='engineering']):not(
			[data-category='software development']
		) {
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
		font-family: 'Inter Variable';
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
		padding: 10px 12px;
		font-size: 16px;
		color: #21231e;
		text-decoration: none;
		border: 1px solid #c4c8cc;
		border-radius: 50px;
		background: #ffffff;
		transition: all 0.2s ease;
		width: fit-content;
	}

	.read-more-btn:hover {
		background: #21231e;
		color: #ffffff;
	}

	.read-more-btn--disabled {
		cursor: default;
		opacity: 0.65;
		pointer-events: none;
	}

	.blog-card-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 20px;
	}

	.blog-card {
		width: 100%;
		background: #ffffff;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		cursor: pointer;
		text-decoration: none;
		display: block;
	}

	.blog-card:hover {
		transform: translateY(-4px);
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
	}

	.blog-card--no-link {
		cursor: default;
		pointer-events: none;
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
		font-family: 'Departure Mono';
		text-align: end;
	}

	.author-icon {
		font-size: 16px;
	}

	.view-all-section {
		padding-top: 24px;
		padding-bottom: 48px;
	}

	@media (max-width: 819px) {
		.hero-title {
			font-size: 60px;
		}

		.hero-subtitle {
			font-size: 16px;
		}
		.featured-blogs {
			justify-items: center;
			padding-bottom: 90px;
		}
		.featured-card {
			width: 345px;
			height: 250px;
		}

		.beyond-title {
			font-size: 24px;
		}

		.beyond-section {
			max-width: 345px;
			padding-top: 60px;
			padding-bottom: 70px;
		}

		.blog-listings {
			max-width: 345px;
		}

		.blog-title {
			font-size: 20px;
		}

		.read-more-btn {
			width: 100%;
			text-align: center;
		}

		.view-all-section {
			max-width: 345px;
			padding-right: 16px;
			padding-left: 16px;
		}

		view-all-button {
			width: 100%;
		}
	}

	@media (min-width: 820px) {
		.hero-section {
			padding-top: 50px;
			padding-bottom: 90px;
		}

		.hero-title {
			font-size: 64px;
			padding-top: 90px;
		}

		.hero-subtitle {
			font-size: 22px;
			padding-bottom: 60px;
			width: 40ch;
		}

		.featured-blogs {
			grid-template-columns: repeat(3, 1fr);
			gap: 24px;
		}

		.beyond-section {
			padding-top: 60px;
			padding-bottom: 60px;
			max-width: 700px;
		}

		.blog-listings {
			display: grid;
			/* grid-template-columns: 1fr 400px; */
			gap: 48px;
			padding-top: 60px;
			padding-bottom: 80px;
			max-width: 700px;
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
			padding-top: 50px;
			padding-bottom: 60px;
			max-width: 700px;
		}
	}

	@media (min-width: 1024px) and (max-width: 1139px) {
		.hero-section {
			padding-top: 50px;
			padding-bottom: 90px;
		}

		.hero-title {
			font-size: 64px;
			padding-top: 90px;
		}

		.hero-subtitle {
			font-size: 22px;
			padding-bottom: 60px;
			width: 40ch;
		}

		.beyond-section {
			padding-top: 120px;
			padding-bottom: 90px;
			gap: 60px;
			width: 895px;
		}

		.view-all-section {
			padding-top: 70px;
			padding-bottom: 120px;
			width: 895px;
		}
		.blog-listings {
			padding-top: 80px;
			padding-bottom: 100px;
			width: 895px;
		}

		.view-all-section {
			padding-top: 40px;
			padding-bottom: 80px;
		}
	}
	@media (min-width: 1140px) {
		.hero-section {
			padding-top: 50px;
			padding-bottom: 90px;
		}
		.hero-title {
			font-size: 64px;
			padding-top: 90px;
		}

		.hero-subtitle {
			color: #51636f;
			font-size: 22px;
			width: 40ch;
		}

		.featured-card {
			width: 330px;
		}

		.beyond-section {
			max-width: 910px;
			margin-inline: auto;
			padding-top: 125px;
			gap: 60px;
		}

		.blog-listings {
			max-width: 910px;
			margin-inline: auto;
		}

		.view-all-section {
			padding-top: 60px;
			padding-bottom: 115px;
			max-width: 910px;
			justify-content: flex-start;
		}

		.blog-title {
			font-size: 30px;
		}

		.blog-description {
			font-size: 14px;
		}

		.filters-container {
			width: 910px;
		}
	}
</style>
