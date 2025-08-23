<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const contacts = [
		'Any indirect or consequential losses',
		'Loss of business, revenue, or data',
		'Damages arising from use or inability to use our website'
	];
</script>

<div class="flex flex-col gap-6">
	<p>To the maximum extent permitted by UAE law, DAAF will not be liable for</p>

	<div>
		{#each contacts as contact}
			<div class="ml-[26px] flex items-center gap-4">
				<span>
					<Arrow />
				</span>
				<p>{contact}</p>
			</div>
		{/each}
	</div>

	<p>Your use of this website is at your own risk.</p>
</div>
