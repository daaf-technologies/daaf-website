<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const data = [
		'Our website hosting provider or CRM tools (if used)',
		'Legal or regulatory authorities if required by UAE law',
		'Subcontracted service providers working on your project (only when necessary and with appropriate data protections)'
	];
</script>

<div class="flex flex-col gap-6">
	<i>We may share limited personal data with: </i>

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
</div>
