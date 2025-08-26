<script lang="ts">
	import { Arrow } from '$lib/assets/icons';

	const contacts = ['DAAF FZ-LLC', 'Dubai, United Arab Emirates', 'admin@daaf.ae'];
</script>

<div class="flex flex-col gap-6">
	<p>For any questions or concerns regarding this policy or your data, please contact:</p>

	<div>
		{#each contacts as contact, index}
			<div class={`ml-[26px] flex items-center gap-4 ${index === 0 ? 'font-semibold' : ''}`}>
				<span>
					<Arrow />
				</span>
				<p>{contact}</p>
			</div>
		{/each}
	</div>
</div>
