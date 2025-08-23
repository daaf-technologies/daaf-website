<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const items = [
		'Request access to the personal data we hold about you',
		'Ask for corrections to inaccurate data',
		'Request deletion of your personal data',
		'Withdraw your consent (where applicable)'
	];
</script>

<div class="flex flex-col gap-6">
	<i> You have the right to: </i>

	<div>
		{#each items as item}
			<div class="ml-[26px] flex items-center gap-4">
				<span>
					<Arrow />
				</span>
				<p>{item}</p>
			</div>
		{/each}
	</div>

	<p>
		To exercise any of these rights, please contact us at <span class="font-semibold">
			admin@daaf.ae
		</span>
	</p>
</div>
