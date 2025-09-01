<script lang="ts">
	import Button from '$lib/components/design/button/button.svelte';

	interface FounderPropsType {
		href: string;
		src: any;
		name: string;
		designation: string;
		className: string;
		imgClassname?: string;
	}

	const { href, src, name, designation, className, imgClassname }: FounderPropsType = $props();
</script>

<a
	{href}
	class={`flex flex-col gap-2 rounded-[12px] border-[1.6px] border-white bg-white pb-[24px] ${className}`}
>
	<img {src} alt="afroze" class={imgClassname} />

	<div class="flex items-center justify-between px-3">
		<div>
			<p class="name text-lg font-semibold lg:text-2xl">{name}</p>
			<p
				class="designation text-sm font-semibold text-nowrap text-[#65755F] lg:h-9 lg:w-[66px] lg:text-xl"
			>
				{designation}
			</p>
		</div>

		<Button
			variant="primary"
			class="flex items-center lg:h-[36px]! lg:w-[66px]! lg:px-[18px]! lg:py-[10px]!"
		>
			<p class="text-[14px]">Visit</p>
		</Button>
	</div>
</a>
