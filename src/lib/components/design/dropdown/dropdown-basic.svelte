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
	}

	let { options, selectLanguage, value }: DropdownPropsType = $props();

	let open = $state(false);

	const toggle = () => (open = !open);

	const handleClickOutside = (e: MouseEvent) => {
		if (!(e.target as HTMLElement).closest('.dropdown')) open = false;
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<div class="dropdown">
	<button class="dropdown-menu" onclick={toggle}>
		{value}
		<span class:icon-open={open} class:icon-close={!open}>
			<ChevronDown />
		</span>
	</button>
	<div class="dropdown-options" class:open>
		{#each options as { label, value: selectedValue, icon: Icon }}
			<button
				class="dropdown-item"
				role="menuitem"
				class:selectedItem={value === selectedValue}
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
		width: 67px;
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
		cursor: pointer;
	}

	.dropdown-options {
		width: 250px;
		position: absolute;
		left: 0;
		top: calc(100% + 24px);
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
