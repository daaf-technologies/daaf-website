<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/ui/footer';
	import Header from '$lib/components/ui/header';
	import Button from '$lib/components/design/button';
	import { caseStudiesData, recentCaseStudies } from '$lib/constants/case-studies';
	import DroneHeroImage from '$lib/assets/images/case-study-drone-hero.png';
	import GeospatialHeroImage from '$lib/assets/images/case-study-geospatial-hero.png';
	import SoilVisualizerHeroImage from '$lib/assets/images/case-study-soil-visualizer-hero.png';
	import ContentImage from '$lib/assets/images/case-study-content-image.png';
	import CaseStudyCard1 from '$lib/assets/images/case-study-card-1.png';
	import CaseStudyCard2 from '$lib/assets/images/case-study-card-2.png';
	import CaseStudyCard3 from '$lib/assets/images/case-study-card-3.png';

	const caseStudyImages: Record<string, string> = {
		'drone-analytics': CaseStudyCard1,
		'geospatial-soil-sampling': CaseStudyCard2,
		'soil-sample-visualizer': CaseStudyCard3
	};

	const heroImages: Record<string, string> = {
		'drone-analytics': DroneHeroImage,
		'geospatial-soil-sampling': GeospatialHeroImage,
		'soil-sample-visualizer': SoilVisualizerHeroImage
	};

	let slug = $derived($page.params.slug);
	let caseStudy = $derived(slug ? caseStudiesData[slug] : null);
	let heroImage = $derived(slug ? heroImages[slug] || null : null);

	// Redirect to case study listing if slug not found
	$effect(() => {
		if (slug && !caseStudy) {
			goto('/case-study');
		}
	});
</script>

<svelte:head>
	{#if caseStudy}
		<title>{caseStudy.title} | Case Study | DAAF</title>
		<meta name="description" content={caseStudy.metaDescription} />
	{:else}
		<title>Case Study | DAAF</title>
		<meta name="description" content="Case study not found" />
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

{#if caseStudy}
	<div class="case-study-detail flex w-full flex-col items-center pt-[50px]">
		<Header />

		<div class="hero-section flex w-full flex-col items-center gap-[30px] px-4 pt-[70px] lg:pt-[120px]">
			<div class="flex flex-col gap-3 text-center max-w-[900px]">
				<h1 class="title text-[30px] font-semibold text-[#21231E] lg:text-[44px]">
					{caseStudy.title}
				</h1>
				<p class="subtitle text-[16px] text-[#51636F] lg:text-[20px]">
					{caseStudy.subtitle}
				</p>
			</div>

			<div class="hero-image-container w-full max-w-[1200px] mt-8">
				{#if heroImage}
					<img src={heroImage} alt={caseStudy.title} class="hero-image" />
				{:else}
					<div class="hero-image-placeholder bg-[#21231E] rounded-lg p-8 h-[400px] flex items-center justify-center">
						<p class="text-white text-lg">Hero Image Placeholder</p>
					</div>
				{/if}
			</div>
		</div>

		<div class="content-section flex w-full max-w-[900px] flex-col gap-12 px-4 py-[60px] lg:py-[120px]">
			<section class="content-block">
				<h2 class="section-title">Client Objective</h2>
				<p class="section-text">{caseStudy.clientObjective}</p>
			</section>

			<div class="content-image-container">
				<img src={ContentImage} alt="Case study content" class="content-image" />
			</div>

			<section class="content-block">
				<h2 class="section-title">Challenges</h2>
				<ul class="bullet-list">
					{#each caseStudy.challenges as challenge}
						<li>
							<span class="bullet">→</span>
							<span class="bullet-text">{challenge}</span>
						</li>
					{/each}
				</ul>
			</section>

			<section class="content-block">
				<h2 class="section-title">DAAF's Approach</h2>
				<p class="section-text">{caseStudy.approach.intro}</p>
				<ul class="bullet-list">
					{#each caseStudy.approach.points as point}
						<li>
							<span class="bullet">→</span>
							<span class="bullet-text">{point}</span>
						</li>
					{/each}
				</ul>
			</section>

			<section class="content-block">
				<h2 class="section-title">Solution Snapshot</h2>
				<p class="section-text">{caseStudy.solutionSnapshot.intro}</p>
				<ul class="bullet-list">
					{#each caseStudy.solutionSnapshot.points as point}
						<li>
							<span class="bullet">→</span>
							<span class="bullet-text">{point}</span>
						</li>
					{/each}
				</ul>
			</section>

			<section class="content-block">
				<h2 class="section-title">Outcomes</h2>
				<p class="section-text">{caseStudy.outcomes.intro}</p>
				<ul class="bullet-list">
					{#each caseStudy.outcomes.points as point}
						<li>
							<span class="bullet">→</span>
							<span class="bullet-text">{point}</span>
						</li>
					{/each}
				</ul>
				{#if caseStudy.outcomes.quote}
					<blockquote class="quote">
						{caseStudy.outcomes.quote.text}
						<cite class="quote-author">— {caseStudy.outcomes.quote.author}</cite>
					</blockquote>
				{/if}
			</section>

			<section class="content-block">
				<h2 class="section-title">User Experience (Flexible Section)</h2>
				<p class="section-text">{caseStudy.userExperience.intro}</p>
				<ul class="bullet-list">
					{#each caseStudy.userExperience.points as point}
						<li>
							<span class="bullet">→</span>
							<span class="bullet-text">{point}</span>
						</li>
					{/each}
				</ul>
				{#if caseStudy.userExperience.quote}
					<blockquote class="quote">
						{caseStudy.userExperience.quote.text}
						<cite class="quote-author">— {caseStudy.userExperience.quote.author}</cite>
					</blockquote>
				{/if}
			</section>

			<section class="content-block">
				<h2 class="section-title">Security & Reliability (Flexible Section)</h2>
				<p class="section-text">{caseStudy.securityReliability.intro}</p>
				<ul class="bullet-list">
					{#each caseStudy.securityReliability.points as point}
						<li>
							<span class="bullet">→</span>
							<span class="bullet-text">{point}</span>
						</li>
					{/each}
				</ul>
			</section>

			<section class="content-block">
				<h2 class="section-title">Delivery Timeline (Flexible Section)</h2>
				<p class="section-text">{caseStudy.deliveryTimeline.intro}</p>
				<ul class="bullet-list">
					{#each caseStudy.deliveryTimeline.points as point}
						<li>
							<span class="bullet">→</span>
							<span class="bullet-text">{point}</span>
						</li>
					{/each}
				</ul>
			</section>

			<section class="content-block cta-section">
				<p class="cta-text">{caseStudy.cta.text}</p>
				<p class="cta-link">
					→ <a href="/contact-us" class="cta-link-text">{caseStudy.cta.linkText}</a>
				</p>
			</section>
		</div>

		<div class="recent-case-studies flex w-full flex-col items-center gap-8 px-4 pb-[60px] lg:pb-[120px]">
			<h2 class="recent-title text-[30px] font-semibold text-[#21231E] lg:text-[44px]">
				Recent Case Studies
			</h2>
			<div
				class="case-studies-grid flex w-full max-w-[1200px] flex-col items-center gap-6 md:grid md:grid-cols-3 md:gap-8"
			>
			{#each recentCaseStudies as study}
				<a href="/case-study/{study.slug}" class="case-study-card">
					<div class="card-image">
						<img
							src={caseStudyImages[study.slug]}
							alt={study.title}
							class="card-image-img"
						/>
					</div>
					<div class="card-content">
						<h3 class="card-title">{study.title}</h3>
						<p class="card-author">{study.author}</p>
					</div>
				</a>
			{/each}
			</div>
			<div class="view-all-section flex w-full justify-center mt-8">
				<Button variant="primary" onclick={() => goto('/case-study')} class="view-all-btn">
					View all
				</Button>
			</div>
		</div>

		<Footer />
	</div>

	<style>
		.case-study-detail {
			background: linear-gradient(177.08deg, #e1fbdc -36.44%, #ffffff 97.58%);
			min-height: 100vh;
		}

		.title {
			font-family: 'recoleta alt';
			line-height: 130%;
		}

	.hero-image-container {
		margin-top: 40px;
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.hero-image {
		width: 100%;
		max-width: 1025px;
		height: 480px;
		border-radius: 16px;
		background-color: #000000;
		object-fit: cover;
		box-shadow:
			3px 4px 10px 0px rgba(50, 47, 47, 0.21),
			12px 15px 19px 0px rgba(50, 47, 47, 0.18);
	}

	.hero-image-placeholder {
		width: 100%;
		max-width: 1025px;
		border-radius: 16px;
		box-shadow:
			3px 4px 10px 0px rgba(50, 47, 47, 0.21),
			12px 15px 19px 0px rgba(50, 47, 47, 0.18);
	}

	.content-section {
		width: 100%;
	}

	.content-image-container {
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 24px 0;
	}

	.content-image {
		width: 100%;
		max-width: 651px;
		height: 292px;
		border-radius: 8px;
		object-fit: cover;
		filter: blur(1.47px);
		box-shadow: 3px 4px 10px 0px rgba(50, 47, 47, 0.21);
	}

	.content-block {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

		.section-title {
			font-family: 'recoleta alt';
			font-size: 28px;
			font-weight: 600;
			color: #21231e;
			line-height: 130%;
		}

		.section-text {
			font-size: 16px;
			line-height: 150%;
			color: #51636f;
		}

		.bullet-list {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		.bullet-list li {
			display: flex;
			gap: 12px;
			align-items: flex-start;
		}

		.bullet {
			color: #38b543;
			font-weight: bold;
			font-size: 18px;
			flex-shrink: 0;
		}

		.bullet-text {
			font-size: 16px;
			line-height: 150%;
			color: #51636f;
		}

		.quote {
			margin: 24px 0;
			padding: 20px;
			border-left: 4px solid #38b543;
			background: #f9f9f9;
			font-style: italic;
			font-size: 16px;
			line-height: 150%;
			color: #51636f;
		}

		.quote-author {
			display: block;
			margin-top: 8px;
			font-size: 14px;
			color: #21231e;
			font-style: normal;
		}

		.cta-section {
			background: #f9f9f9;
			padding: 32px;
			border-radius: 12px;
			margin-top: 24px;
		}

		.cta-text {
			font-size: 18px;
			font-weight: 500;
			color: #21231e;
			margin-bottom: 12px;
		}

		.cta-link {
			font-size: 16px;
			color: #51636f;
		}

		.cta-link-text {
			color: #38b543;
			text-decoration: underline;
			font-weight: 500;
		}

		.recent-title {
			font-family: 'recoleta alt';
			text-align: center;
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

		.card-image-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}

		.card-image-placeholder {
			width: 100%;
			height: 100%;
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

		@media (max-width: 768px) {
			.section-title {
				font-size: 24px;
			}

			.section-text,
			.bullet-text {
				font-size: 14px;
			}

			.hero-image {
				height: 300px;
			}

			.hero-image-placeholder {
				height: 300px;
			}

			.content-image {
				height: 200px;
			}

			.cta-section {
				padding: 24px;
			}
		}

		@media (min-width: 1024px) {
			.section-title {
				font-size: 32px;
			}

			.section-text,
			.bullet-text {
				font-size: 18px;
			}
		}
	</style>
{/if}
