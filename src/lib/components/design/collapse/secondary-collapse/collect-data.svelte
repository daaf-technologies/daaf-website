<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const types = [
		'Your name, email address, and phone number (if submitted via contact forms or email)',
		'Company name and job title (if shared with us)',
		'IP address and device/browser data (via analytics tools like Google Analytics)',
		'Any other information you choose to share with us directly'
	];
</script>

<div class="flex flex-col gap-6 text-[14px] lg:text-[16px]">
	<i>We may collect the following types of data: </i>

	<div>
		{#each types as type}
			<div class="ml-[26px] flex items-center gap-4">
				<span>
					<Arrow />
				</span>
				<p>{type}</p>
			</div>
		{/each}
	</div>
</div>
