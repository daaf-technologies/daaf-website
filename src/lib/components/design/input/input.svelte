<script lang="ts">
	interface InputPropsType {
		placeholder: string;
		type: 'text' | 'email' | 'tel';
		name: string;
		className?: string;
		required?: boolean;
		pattern?: string;
		disabled?: boolean;
		value?: string | number;
		oninput?: (e: InputEvent) => void;
	}

	let {
		placeholder,
		type,
		name,
		className,
		required,
		pattern,
		disabled,
		oninput,
		value = $bindable(),
		...rest
	}: InputPropsType = $props();
</script>

<input
	class={`input ${className}`}
	{placeholder}
	{type}
	{name}
	{required}
	{pattern}
	{disabled}
	bind:value
	{...rest}
/>

<style>
	.input {
		width: 100%;
		padding: 12px;
		border: 1px solid #c4c8cc;
		background-color: #ffffff;
		border-radius: 8px;
	}

	.input:focus {
		outline: none;
	}

	.input::placeholder {
		color: #51636f;
		font-size: 14px;
	}
</style>
