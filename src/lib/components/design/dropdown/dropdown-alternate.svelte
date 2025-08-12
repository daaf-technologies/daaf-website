<script lang="ts">
	import ChevronDown from '$lib/assets/icons/chevron-down.svelte';
	import { onMount, type Component } from 'svelte';

	interface DropdownPropsType {
		options: {
			icon: Component;
			label: string;
			value: string;
		}[];
		selectLanguage: (lang: string) => void;
		value: string;
		icon: Component;
	}

	let { options, selectLanguage, value, icon: LeftIcon }: DropdownPropsType = $props();

	let open = $state(false);

	const toggle = () => (open = !open);

	const handlePointerDownOutside = (e: PointerEvent) => {
		if (!(e.target as HTMLElement).closest('.dropdown')) open = false;
	};

	onMount(() => {
		document.addEventListener('pointerdown', handlePointerDownOutside, true);
		return () => document.removeEventListener('pointerdown', handlePointerDownOutside, true);
	});
</script>

<div class="dropdown">
	<button class="dropdown-menu" onclick={toggle}>
		<span>
			<LeftIcon />
		</span>
		{value}
		<span class:icon-open={open} class:icon-close={!open}>
			<ChevronDown />
		</span>
	</button>
	<div class="dropdown-options" class:open>
		{#each options as { label, value: selectedValue, icon: Icon }}
			<button
				class="dropdown-item"
				class:selectedItem={value === selectedValue}
				role="menuitem"
				onclick={() => {
					selectLanguage(selectedValue);
					value = selectedValue;
					open = false;
				}}
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
		width: 120px;
	}

	.dropdown-menu {
		background-color: #21231e;
		color: #ffffff;
		border-radius: 8px;
		padding: 6px 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		cursor: pointer;
	}

	.dropdown-options {
		width: 176px;
		position: absolute;
		left: 0;
		top: calc(100% + 8px);
		display: flex;
		flex-direction: column;
		gap: 8px;
		background-color: #21231e;
		color: #ffffff;
		padding: 8px;
		border: 2px solid #696969;
		border-radius: 20px;
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
		width: 100%;
		padding: 16px;
		border-radius: 14px;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.dropdown-item:hover {
		background-color: #323332;
	}

	.selectedItem {
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
