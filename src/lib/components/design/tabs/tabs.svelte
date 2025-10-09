<script lang="ts">
	import type { Component } from 'svelte';

	interface TabItem {
		label: string;
		icon: Component;
		content: any;
	}

	interface TabsPropsType {
		tabs: TabItem[];
		defaultActiveIndex?: number;
		onTabChange?: (index: number) => void;
		containerClassName?: string;
		headerClassName?: string;
		activeTabClassName?: string;
	}
	const {
		tabs,
		defaultActiveIndex = 0,
		onTabChange,
		containerClassName,
		headerClassName,
		activeTabClassName
	}: TabsPropsType = $props();

	let activeIndex: number = $state(defaultActiveIndex);

	let loadedTabs: number[] = $state([defaultActiveIndex]);

	$effect(() => {
		if (!loadedTabs.includes(activeIndex)) {
			loadedTabs = [...loadedTabs, activeIndex];
		}
	});

	const handleClick = (index: number) => {
		activeIndex = index;

		onTabChange?.(index);
	};
</script>

<div class={`tabs-container ${containerClassName}`}>
	<div class={`tabs-header ${headerClassName}`}>
		{#each tabs as { label, icon: Icon }, index}
			<button
				class={`tab-item ${index === activeIndex ? `active ${activeTabClassName ?? ''}` : ''}`}
				onclick={() => handleClick(index)}
			>
				{#if Icon}
					<span class="tab-icon">
						<Icon stroke={index === activeIndex ? 'white' : 'black'} />
					</span>
				{/if}
				<p>
					{label}
				</p>
			</button>
		{/each}
	</div>

	<div class="tabs-content">
		{#if loadedTabs.includes(activeIndex)}
			{@const entry = tabs[activeIndex].content}
			{@const Content = entry.component}
			<Content {...entry.props ?? {}} />
		{/if}
	</div>
</div>

<style>
	.tabs-container {
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.tabs-header {
		display: flex;
		gap: 12px;
		overflow-x: auto;
		white-space: nowrap;
	}

	.tab-item {
		font-size: 14px;
		padding: 10px 12px;
		border: 1px solid #c4c8cc;
		border-radius: 50px;
		cursor: pointer;
		transition:
			background-color 0.3s,
			color 0.3s;
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.tab-item.active {
		background-color: #000;
		color: white;
	}

	.tab-item:hover {
		background-color: #f0f0f0;
	}

	.tab-item.tab-item.active:hover {
		background-color: #000;
	}

	@media (min-width: 820px) {
		.tabs-header {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.tabs-content {
			padding: 0 40px;
		}
	}

	@media (min-width: 960px) {
		.tabs-header {
			max-width: 800px;
		}
	}

	@media (min-width: 1280px) {
		.tabs-header {
			max-width: 100%;
		}
	}
</style>
