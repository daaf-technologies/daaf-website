<script lang="ts">
	import ChevronDown from '$lib/assets/icons/chevron-down.svelte';
	import { onMount, type Component, type Snippet } from 'svelte';

	interface DropdownPropsType {
		options: {
			icon: Component;
			label: string;
			value: string;
		}[];
		selectLanguage: (lang: string) => void;
		value: string;
		left?: Snippet;
		dropdownControlClassname?: string;
		dropdownMenuClassname?: string;
		dropdownItemClassname?: string;
	}

	let {
		options,
		selectLanguage,
		value,
		left,
		dropdownControlClassname,
		dropdownMenuClassname,
		dropdownItemClassname
	}: DropdownPropsType = $props();

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
	<button
		aria-haspopup="menu"
		aria-expanded={open}
		aria-controls="lang-menu"
		class={`dropdown-control ${dropdownControlClassname ?? ''}`}
		onclick={toggle}
	>
		<div class="dropdown-value">
			{@render left?.()}

			<p class="dropdown-control-lang">
				{value}
			</p>
		</div>

		<span class:icon-open={open} class:icon-close={!open}>
			<ChevronDown />
		</span>
	</button>
	<div id="lang-menu" class={`dropdown-menu ${dropdownMenuClassname ?? ''}`} role="menu" class:open>
		{#each options as { label, value: selectedValue, icon: Icon }}
			<button
				class={`dropdown-item ${dropdownItemClassname ?? ''}`}
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

<!-- @component
### Takes in these props

```ts
interface DropdownPropsType {
  options: { icon: Component; label: string; value: string }[];
  selectLanguage: (lang: string) => void;
  value: string;
  icon?: Component;
  dropdownControlClassname?: string; // extra classes for the top "control"
  dropdownMenuClassname?: string;    // extra classes for the bottom "menu"
  dropdownItemClassname?: string;    // extra classes applied to each "item"
}

- options: array – each item has icon (Svelte component), label (string), value (string)

- selectLanguage: function – called when an item is selected

- value: string – currently selected value (two-way bindable)

- icon: Component – optional icon shown in the control

- dropdownControlClassname: string – add custom classes to the control

- dropdownMenuClassname: string – add custom classes to the menu container

- dropdownItemClassname: string – add custom classes to each item

Example usage:

<script lang="ts">
  import Dropdown from '$lib/components/dropdown.svelte';
  import UK from '$lib/assets/icons/uk.svelte';
  import Dubai from '$lib/assets/icons/dubai.svelte';

  let options = [
    { icon: UK, label: 'English', value: 'English' },
    { icon: Dubai, label: 'Arabic', value: 'Arabic' }
  ];

  let value = $state('English');

  function selectLanguage(lang: string) {
    value = lang;
  }
</script>

<Dropdown
  {options}
  {selectLanguage}
  bind:value
  icon={UK}
  dropdownControlClassname="w-32"
  dropdownMenuClassname="w-44"
  dropdownItemClassname="text-sm"
/>


Notes:

Top section = control; bottom = menu; each entry = item.

Control exposes aria-haspopup="menu" and aria-expanded.
-->

<style>
	.dropdown {
		position: relative;
	}

	.dropdown-control {
		background-color: #21231e;
		color: #ffffff;
		border-radius: 8px;
		padding: 6px 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.dropdown-control-lang {
		margin-left: 6px;
		margin-right: 12px;
	}

	.dropdown-menu {
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
		width: 160px;
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

	.dropdown-value {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
</style>
