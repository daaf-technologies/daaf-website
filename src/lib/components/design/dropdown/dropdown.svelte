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
		icon?: Component;
	}

	let { options, selectLanguage, value, icon: LeftIcon }: DropdownPropsType = $props();

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

<!-- @component
### Dropdown — Language Selector

A compact, mouse-first dropdown built with Svelte 5 `$props` and `$state`. It toggles a menu, lets the user pick an option, calls a callback, updates `value`, and closes. Click-outside is handled via a document listener.

#### Props (TypeScript)
```ts
interface DropdownPropsType {
  options: { icon: Component; label: string; value: string }[]; // list items to render
  selectLanguage: (lang: string) => void;                       // called on selection
  value: string;                                                // current selected value (two-way bindable)
  icon?: Component;                                             // optional left icon in trigger
}
options: Array of items with icon (Svelte component), label (string), value (string)

selectLanguage: (value) => void — fires before the dropdown closes

value: string — current value; component mutates it on select; supports bind:value

icon: optional Svelte component rendered on the left side of the trigger

Behavior
Click trigger → toggles open/close

Click outside → closes

Click an item → calls selectLanguage(selectedValue), sets value = selectedValue, closes

No custom events are dispatched (if you need on:change, wire one up—see “Extending”)

Example Usage

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

<Dropdown {options} {selectLanguage} bind:value icon={UK} />

Alternate value mapping example:

let options = [
  { icon: UK, label: 'English', value: 'EN' },
  { icon: Dubai, label: 'Arabic', value: 'AR' }
];

let value = $state('EN');

function selectLanguage(lang: string) {
  value = lang;
}
Classes / Styling hooks
.dropdown — wrapper (positioning context)

.dropdown-menu — trigger button

.dropdown-options — menu container

.open — applied to .dropdown-options when visible

.dropdown-item — each option row

.selectedItem — applied when value === option.value

.icon-open / .icon-close — chevron rotation state

Notes / Gotchas
options[].icon and icon must be Svelte components (not raw SVG strings)

The component mutates value internally. Use bind:value to keep parent state in sync

Click-outside uses a document.addEventListener('click', …); ensure only one dropdown is listening if you render many
-->

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
