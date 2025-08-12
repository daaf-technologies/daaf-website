<script lang="ts">
	import ChevronDown from '$lib/assets/icons/chevron-down.svelte';

	let { options, selectLanguage, value } = $props();

	let open = $state(false);

	const toggle = () => (open = !open);
</script>

<div class="dropdown">
	<button
		class="dropdown-menu"
		type="button"
		aria-haspopup="true"
		aria-expanded={open}
		aria-controls="lang-menu"
		onclick={toggle}
	>
		{value}
		<span class:icon-open={open} class:icon-close={!open}>
			<ChevronDown />
		</span>
	</button>
	<div id="lang-menu" class="dropdown-options open" class:open>
		{#each options as { label, value, icon: Icon }}
			<button
				type="button"
				class="dropdown-item"
				role="menuitem"
				onclick={() => selectLanguage(value)}
			>
				<Icon />
				{label}
			</button>
		{/each}
	</div>
</div>

<style>
	.dropdown {
		position: relative;
	}

	.dropdown-menu {
		background-color: #21231e;
		color: #ffffff;
		border: 1px solid #696969;
		border-radius: 8px;
		padding: 6px 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.dropdown-options {
		position: absolute;
		left: 0;
		top: calc(100% + 24px);
		background-color: #21231e;
		color: #ffffff;
		padding: 16px;
		border: 2px solid #696969;
		border-radius: 20px;
		backdrop-filter: blur(54px);
		-webkit-backdrop-filter: blur(54px);
		opacity: 0;
		pointer-events: none;
		transform: translateY(-10px);
		transition:
			opacity 150ms ease-in-out,
			transform 150ms ease-in-out;
	}

	.open {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}

	.dropdown-item {
		padding: 16px;
		border-radius: 14px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.dropdown-item:hover {
		background-color: #323332;
	}

	.icon-open {
		transform: rotate(180deg);
		transition: transform 150ms ease;
	}

	.icon-close {
		transform: rotate(0deg);
		transition: transform 150ms ease;
	}
</style>
