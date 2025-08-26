<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const contacts = [
		'Copy, reproduce, or distribute our content for commercial purposes',
		'Use our branding or case studies without written permission'
	];
</script>

<div class="flex flex-col gap-6">
	<p>
		All content on this website — including text, graphics, logos, code snippets, service
		descriptions, and branding — is the property of DAAF unless otherwise stated.
	</p>

	<i> You may not: </i>

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

	<p>You may, however, reference our services for legitimate business inquiries or proposals.</p>
</div>
