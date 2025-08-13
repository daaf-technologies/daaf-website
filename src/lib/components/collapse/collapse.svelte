<script lang="ts">
	import { Globe, Mail } from '$lib/assets/icons';

	let open = $state(false);
</script>

<div>
	<div class="collapse-wrapper">
		<button class="collapse-header" onclick={() => (open = !open)}>1. Company Information</button>

		{#if open}
			<div class="collapse-body">
				<div class="flex flex-col gap-4">
					<p>
						This website is operated by DAFF FZ-LLC, a technology consulting and software
						engineering firm based in Dubai, United Arab Emirates.
					</p>

					<div class="flex gap-4">
						<div
							class="flex items-center gap-2 rounded-[10px] border border-[#CADFC7] bg-[#E2FADF] px-2.5 py-3"
						>
							<Globe />
							<a href="https://daff.ae">https://daaf.ae</a>
						</div>

						<div
							class="flex items-center gap-2 rounded-[10px] border border-[#CADFC7] bg-[#E2FADF] px-2.5 py-3"
						>
							<Mail />
							<a href="admin@daff.ae">admin@daff.ae</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.collapse-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;
	}
	.collapse-header {
		cursor: pointer;
		color: #21231e;
	}

	.collapse-body {
		color: #51636f;
	}
</style>
