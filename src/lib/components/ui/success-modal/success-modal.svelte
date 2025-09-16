<script lang="ts">
	import { goto } from '$app/navigation';
	import { Success } from '$lib/assets/icons';
	import Button from '$lib/components/design/button';
	import Modal from '$lib/components/design/modal';

	let { isOpen } = $props();
</script>

<Modal {isOpen}>
	<Success />
	<p class="py-2 text-xl font-semibold text-[#03100E]">Submitted Successfully!</p>
	<p class="pb-5 text-sm text-[#51636F]">We'll reach out to you shortly!</p>

	<Button variant="secondary" class="border-none! bg-[#B6B6B633]!" onclick={() => goto('/')}
		>Back to home</Button
	>
</Modal>
