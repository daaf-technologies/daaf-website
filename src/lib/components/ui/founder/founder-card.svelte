<script lang="ts">
	import Button from '$lib/components/design/button/button.svelte';

	interface FounderPropsType {
		src: any;
		name: string;
		designation: string;
		imgClassname: string;
	}

	const { src, designation, name, imgClassname }: FounderPropsType = $props();
</script>

<div class="flex flex-col gap-2 border-[1.6px] border-white bg-white">
	<img {src} alt="afroze" class={imgClassname} />

	<div class="flex justify-between px-3">
		<div>
			<p class="name text-lg font-semibold">{name}</p>
			<p class="designation text-sm font-semibold text-[#65755F]">{designation}</p>
		</div>

		<Button variant="primary">Visit</Button>
	</div>
</div>
