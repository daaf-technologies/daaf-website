<script lang="ts">
	import DoubleQuote from '$lib/assets/images/double-quote.svg';

	type CardPropsType = {
		image: string;
		title: string;
		author: string;
		photo?: string;
	};

	let { image, title, author, photo }: CardPropsType = $props();
</script>

<div class="wrapper">
	<img class="image" src={image} alt="case-study" />

	<p class="title">{title}</p>

	<div class="author-container">
		{#if photo}
			<img class="photo" src={photo} alt="author" />
		{/if}

		<p class="author">{author}</p>
	</div>

	<img class="quote" src={DoubleQuote} alt="double-quote" />
</div>

<style>
	.wrapper {
		width: fit-content;
		position: relative;
		background-color: #ffffff;
		border: 1px solid #ced1d433;
		box-shadow: 0px 6.63px 23.56px 0px #00000008;
		border-radius: 16px;
		padding: 8px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.image {
		width: 325px;
		height: 150px;
		border-radius: 8px;
		object-fit: cover;
		align-self: center;
	}

	.title {
		color: #0c223b;
		font-weight: 500;
		font-size: 20px;
		line-height: 140%;
		letter-spacing: -0.22px;
		width: 17ch;
		padding-left: 22px;
	}

	.photo {
		width: 20px;
	}

	.author {
		color: #496075;
		font-size: 14px;
		font-family: 'Departure Mono';
	}

	.quote {
		position: absolute;
		top: 175px;
		left: 22px;
	}

	.author-container {
		display: flex;
		padding-left: 22px;
		padding-bottom: 20px;
		gap: 8px;
	}

	@media (min-width: 820px) {
		.image {
			width: 200px;
		}
	}

	@media (min-width: 960px) {
		.image {
			width: 238px;
		}
	}

	@media (min-width: 1024px) {
		.image {
			width: 245px;
		}
	}

	@media (min-width: 1440px) {
		.image {
			width: 270px;
		}
	}
</style>
