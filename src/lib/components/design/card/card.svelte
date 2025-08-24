<script lang="ts">
	interface CardPropsType {
		leftTitle: string;
		leftContent: string;
		rightTopTitle: string;
		rightTopContent: string;
		rightBottomTitle: string;
		rightBottomContent: string;
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
				{rightTopContent}
			</p>
		</div>
		<div class="right-bottom">
			<p class="right-bottom-title">
				{rightBottomTitle}
			</p>
			<p class="right-bottom-content">
				{rightBottomContent}
			</p>
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 90px;
		background: rgba(255, 255, 255, 0.5);
		border: 2px solid #fff;
		border-radius: 12px;
		box-shadow: 0px 4px 4px 0px #ffffff40 inset;
		padding: 90px 60px;
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.left-title {
		font-size: 36px;
		font-weight: 500;
	}

	.left-content {
		color: #51636f;
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
	}

	.right-top-content {
		font-size: 16px;
		color: #51636f;
	}

	.right-bottom {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.right-bottom-title {
		font-size: 24px;
		font-weight: 500;
	}

	.right-bottom-content {
		font-size: 16px;
		color: #51636f;
	}
</style>
