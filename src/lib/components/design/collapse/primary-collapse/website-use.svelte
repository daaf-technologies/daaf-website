<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const contacts = [
		'Use the site only for lawful purposes',
		'Not misuse the contact forms, scrape data, or attempt unauthorized access',
		'Not use the site in a way that could damage or impair its functionality'
	];
</script>

<div class="flex flex-col gap-6 text-[14px] lg:text-[16px]">
	<p>
		Our website is intended to provide information about our services, expertise, and company
		background. You agree to:
	</p>

	<i> You agree to: </i>

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

	<p>
		DAAF reserves the right to suspend or restrict access if your usage is deemed abusive, illegal,
		or disruptive.
	</p>
</div>
