<script lang="ts">
	interface CardPropsType {
		leftTitle: string;
		leftContent: string;
		rightTopTitle: string;
		rightTopContent: string[];
		rightBottomTitle: string;
		rightBottomContent: string[];
	}

	const {
		leftTitle,
		leftContent,
		rightTopTitle,
		rightTopContent,
		rightBottomTitle,
		rightBottomContent
	}: CardPropsType = $props();
</script>

<div class="card">
	<div class="left">
		<p class="left-title">{leftTitle}</p>
		<p class="left-content">
			{leftContent}
		</p>
	</div>
	<div class="right">
		<div class="right-top">
			<p class="right-top-title">
				{rightTopTitle}
			</p>
			<p class="right-top-content">
				{#each rightTopContent as item}
					<span class="item tracking-[-0.25px]">{item}</span>
				{/each}
			</p>
		</div>
		<div class="right-bottom">
			<p class="right-bottom-title">
				{rightBottomTitle}
			</p>
			<p class="right-bottom-content">
				{#each rightBottomContent as item}
					<span class="item tracking-[-0.25px]">{item}</span>
				{/each}
			</p>
		</div>
	</div>
</div>

<style>
	.card {
		background: rgba(255, 255, 255, 0.5);
		border: 2px solid #fff;
		border-radius: 12px;
		box-shadow: 0px 4px 4px 0px #ffffff40 inset;
		background: linear-gradient(135deg, #c4ffc9 0%, #ffffff 20%);
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.left-title {
		font-weight: 500;
		line-height: 130%;
		color: #21231e;
	}

	.left-content {
		color: #51636f;
		letter-spacing: -0.25px;
		line-height: 172%;
		font-weight: 400;
	}

	.right {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.right-top {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.right-top-title {
		font-size: 24px;
		font-weight: 500;
		color: #21231e;
	}

	.right-top-content {
		font-size: 14px;
		color: #51636f;
		display: flex;
		flex-wrap: wrap;
		column-gap: 16px;
		row-gap: 12px;
	}

	.item {
		padding: 8px 12px;
		border: 1px solid #e2e2e2;
		border-radius: 8px;
		letter-spacing: -0.25px;
		text-wrap: nowrap;
	}

	.right-bottom {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.right-bottom-title {
		font-size: 24px;
		font-weight: 500;
		color: #21231e;
	}

	.right-bottom-content {
		font-size: 14px;
		color: #51636f;
		display: flex;
		flex-wrap: wrap;
		column-gap: 16px;
		row-gap: 12px;
	}

	.item {
		padding: 8px 12px;
		border: 1px solid #e2e2e2;
		border-radius: 8px;
		letter-spacing: -0.25px;
		text-wrap: nowrap;
	}

	@media (max-width: 768px) {
		.card {
			background-color: #f1f1f1;
			padding: 16px;
			border: 2px solid #fff;
			display: flex;
			flex-direction: column;
			gap: 28px;
		}

		.left-title {
			font-size: 20px;
		}

		.left-content {
			font-size: 14px;
		}

		.right-top-title {
			font-size: 16px;
		}

		.right-bottom-title {
			font-size: 16px;
		}
	}

	@media (min-width: 820px) {
		.card {
			display: flex;
			gap: 48px;
			padding: 30px;
			width: 720px;
			height: 415px;
		}

		.left {
			min-width: 300px;
			max-width: 300px;
		}

		.left-title {
			font-size: 30px;
		}

		.right {
			gap: 20px;
			min-width: 320px;
		}

		.right-top-title {
			font-size: 20px;
		}

		.right-top-content {
			column-gap: 12px;
			row-gap: 12px;
		}

		.right-bottom-title {
			font-size: 20px;
		}
		.right-bottom-content {
			column-gap: 8px;
			row-gap: 8px;
		}

		.item {
			font-size: 14px;
			padding: 4px;
			text-wrap: nowrap;
		}
	}

	@media (min-width: 1024px) {
		.card {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 90px;
			padding: 0 60px;
			width: 850px;
			height: 432px;
		}

		.left {
			width: 500px;
		}

		.left-title {
			font-size: 36px;
		}

		.left-content {
			font-size: 16px;
		}

		.right {
			width: 625px;
		}
	}

	@media (min-width: 1280px) {
		.card {
			width: 1110px;
			height: 452px;
		}
		.left {
			min-width: 400px;
		}
		.right-top-title {
			font-size: 24px;
		}

		.item {
			font-size: 16px;
			padding: 8px 12px;
		}

		.right-bottom-title {
			font-size: 24px;
		}
	}
</style>
