<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const contacts = ['DAFF FZ-LLC', 'Dubai, United Arab Emirates', 'admin@daff.ae'];
</script>

<div class="flex flex-col gap-6">
	<p>For any questions related to these Terms of Use, please contact us at:</p>

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
</div>
