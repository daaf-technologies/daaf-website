<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/ui/footer';
	import GetInTouch from '$lib/components/ui/get-in-touch';
	import Header from '$lib/components/ui/header';
	import Button from '$lib/components/design/button';
	import { caseStudiesData } from '$lib/constants/case-studies';
	import CaseStudyCard1 from '$lib/assets/images/case-study-card-1.png';
	import CaseStudyCard2 from '$lib/assets/images/case-study-card-2.png';
	import CaseStudyCard3 from '$lib/assets/images/case-study-card-3.png';

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

	const caseStudies = [
		{
			id: '1',
			title: 'Drone Analytics & NDVI Reporting',
			category: 'Engineering',
			image: CaseStudyCard1,
			author: 'Daaf Technologies',
			slug: 'drone-analytics'
		},
		{
			id: '2',
			title: 'Geospatial Soil Sampling Planner',
			category: 'Industry',
			image: CaseStudyCard2,
			author: 'Daaf Technologies',
			slug: 'geospatial-soil-sampling'
		},
		{
			id: '3',
			title: 'Soil Sample Visualizer',
			category: 'Product',
			image: CaseStudyCard3,
			author: 'Daaf Technologies',
			slug: 'soil-sample-visualizer'
		}
	];

	let filteredCaseStudies = $derived(
		selectedFilter === 'All Blogs'
			? caseStudies
			: caseStudies.filter((study) => study.category === selectedFilter)
	);
</script>

<svelte:head>
	<title>Case Study | DAAF - Enterprise Software Solutions</title>
	<meta
		name="description"
		content="Explore DAAF's successful enterprise software projects: legacy modernization, AI systems, cloud-native applications, and enterprise platform integrations."
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

<div class="case-study flex w-full flex-col items-center pt-0">
	<Header />

	<div class="hero-section flex w-full flex-col items-center gap-[30px] px-4 pt-[40px]">
		<div class="flex flex-col gap-3 text-center">
			<p class="title text-[30px] font-semibold text-[#21231E]">Case Study</p>
			<p
				class="subtitle w-full max-w-[90%] text-center text-[16px] text-[#51636F]"
			>
				From seamless integration to future-ready platforms, DAAF builds what tomorrow demands —
				today.
			</p>
		</div>

		<div class="filters-container flex w-full max-w-[1200px] flex-wrap justify-center gap-2 px-4">
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

	<div
		class="case-studies-grid flex w-full max-w-[1200px] flex-col items-center gap-4 px-4 py-[40px]"
	>
		{#each filteredCaseStudies as study}
			<a href="/case-study/{study.slug}" class="case-study-card">
				<div class="card-image">
					<img src={study.image} alt={study.title} />
				</div>
				<div class="card-content">
					<h3 class="card-title">{study.title}</h3>
					<p class="card-author">{study.author}</p>
				</div>
			</a>
		{/each}
	</div>

	<div class="view-all-section flex w-full justify-center pb-[40px]">
		<Button variant="primary" onclick={() => goto('/blogs')} class="view-all-btn">
			View all Blogs
		</Button>
	</div>

	<GetInTouch />
	<Footer />
</div>

<style>
	.case-study {
		background: linear-gradient(177.08deg, #e1fbdc -36.44%, #ffffff 97.58%);
		min-height: 100vh;
	}

	.title {
		font-family: 'recoleta alt';
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

	.case-study-card {
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

	.case-study-card:hover {
		transform: translateY(-4px);
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
	}

	.card-image {
		width: 100%;
		aspect-ratio: 269 / 150;
		overflow: hidden;
		background: #f1f1f1;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.card-content {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.card-title {
		font-family: 'recoleta alt';
		font-size: 20px;
		font-weight: 600;
		color: #21231e;
		line-height: 130%;
	}

	.card-author {
		font-size: 14px;
		color: #51636f;
	}

	.view-all-btn {
		padding: 12px 32px;
	}

	/* Mobile: 375px to 820px */
	@media (max-width: 820px) {
		.case-study {
			padding-top: 0;
		}

		.hero-section {
			padding-top: 24px;
			gap: 24px;
		}

		.title {
			font-size: 30px;
		}

		.subtitle {
			font-size: 16px;
			line-height: 150%;
		}

		.filters-container {
			padding: 0 16px;
			gap: 8px;
			justify-content: flex-start;
			overflow-x: auto;
			-webkit-overflow-scrolling: touch;
			scrollbar-width: none;
		}

		.filters-container::-webkit-scrollbar {
			display: none;
		}

		.filter-btn {
			font-size: 12px;
			padding: 8px 16px;
			white-space: nowrap;
			flex-shrink: 0;
		}

		.case-studies-grid {
			display: flex;
			flex-direction: column;
			width: 100%;
			padding-left: 16px;
			padding-right: 16px;
		}

		.case-study-card {
			width: 100%;
		}

		.card-content {
			padding: 16px;
		}

		.card-title {
			font-size: 18px;
		}

		.card-author {
			font-size: 14px;
		}

		.view-all-section {
			padding-bottom: 40px;
		}

		.view-all-btn {
			width: auto;
			padding: 12px 24px;
		}
	}

	/* Tablet: 821px to 1023px */
	@media (min-width: 821px) and (max-width: 1023px) {
		.case-study {
			padding-top: 50px;
		}

		.hero-section {
			padding-top: 70px;
			gap: 30px;
		}

		.title {
			font-size: 44px;
		}

		.subtitle {
			font-size: 20px;
			max-width: 60ch;
		}

		.filters-container {
			gap: 12px;
		}

		.filter-btn {
			font-size: 14px;
			padding: 10px 20px;
		}

		.case-studies-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 24px;
			padding-top: 60px;
			padding-bottom: 60px;
		}

		.card-title {
			font-size: 20px;
		}

		.view-all-section {
			padding-bottom: 60px;
		}
	}

	/* Laptop: 1024px to 1139px */
	@media (min-width: 1024px) and (max-width: 1139px) {
		.case-study {
			padding-top: 50px;
		}

		.hero-section {
			padding-top: 120px;
			gap: 30px;
		}

		.title {
			font-size: 44px;
		}

		.subtitle {
			font-size: 20px;
			max-width: 60ch;
		}

		.filters-container {
			gap: 12px;
		}

		.filter-btn {
			font-size: 14px;
			padding: 10px 20px;
		}

		.case-studies-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 32px;
			padding-top: 120px;
			padding-bottom: 120px;
		}

		.card-title {
			font-size: 22px;
		}

		.view-all-section {
			padding-bottom: 120px;
		}
	}

	/* Large Desktop: 1140px and above */
	@media (min-width: 1140px) {
		.case-study {
			padding-top: 50px;
		}

		.hero-section {
			padding-top: 120px;
			gap: 30px;
			max-width: 1200px;
		}

		.title {
			font-size: 44px;
		}

		.subtitle {
			font-size: 20px;
			max-width: 60ch;
		}

		.filters-container {
			gap: 12px;
		}

		.filter-btn {
			font-size: 14px;
			padding: 10px 20px;
		}

		.case-studies-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 32px;
			padding-top: 120px;
			padding-bottom: 120px;
			max-width: 1200px;
		}

		.card-title {
			font-size: 22px;
		}

		.view-all-section {
			padding-bottom: 120px;
		}
	}
</style>
