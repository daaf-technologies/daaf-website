<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const data = [
		'Respond to enquiries and project discussions',
		'Understand who is visiting our website and how it’s being used',
		'Improve our content and service delivery',
		'Maintain records for administrative or legal purposes'
	];
</script>

<div class="flex flex-col gap-6">
	<i>We use your data to: </i>

	<div>
		{#each data as datum}
			<div class="ml-[26px] flex items-center gap-4">
				<span>
					<Arrow />
				</span>
				<p>{datum}</p>
			</div>
		{/each}
	</div>

	<p>
		We do <span class="font-semibold"> not </span> sell or rent your personal data to third parties.
	</p>
</div>
