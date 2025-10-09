<script>
	import { tabs } from '$lib/constants/tabs';
	import Expandable from './expandable.svelte';
</script>

<div class="flex flex-col gap-5">
	{#each tabs as t, i}
		<Expandable id={t.icon} title={t.label} bodyClassName="!max-h-[700px]">
			{@const entry = t.content}
			{@const Content = entry.component}
			<Content {...entry.props ?? {}} />
		</Expandable>
	{/each}
</div>
