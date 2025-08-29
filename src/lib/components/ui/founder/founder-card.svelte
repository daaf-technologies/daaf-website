<script lang="ts">
	import Button from '$lib/components/design/button/button.svelte';

	interface FounderPropsType {
		href: string;
		src: any;
		name: string;
		designation: string;
		className: string;
		imgClassname: string;
	}

	const { href, src, name, designation, className, imgClassname }: FounderPropsType = $props();
</script>

<a
	{href}
	class={`flex flex-col gap-2 rounded-[12px] border-[1.6px] border-white bg-white pb-[24px] ${className}`}
>
	<img {src} alt="afroze" class={imgClassname} />

	<div class="flex justify-between px-3">
		<div>
			<p class="name text-lg font-semibold">{name}</p>
			<p class="designation text-sm font-semibold text-[#65755F]">{designation}</p>
		</div>

		<Button variant="primary">Visit</Button>
	</div>
</a>
