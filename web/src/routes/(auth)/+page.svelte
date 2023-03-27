<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button/Button.svelte';
	import EmailField from '$lib/components/Form/Fields/EmailField.svelte';
	import FormFieldGroup from '$lib/components/Form/Fields/FormFieldGroup.svelte';
	import PasswordField from '$lib/components/Form/Fields/PasswordField.svelte';
	import { expoInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{
		x: '-100%',
		easing: expoInOut,
		duration: 500,
		opacity: 0
	}}
	out:fly={{
		x: '-100%',
		easing: expoInOut,
		duration: 500,
		opacity: 0
	}}
>
	<h1>Login</h1>
	<p>
		Already a <strong>psychologist</strong>? <a href="/signup"><strong>Sign Up</strong></a>
	</p>

	<form method="POST" use:enhance>
		<FormFieldGroup>
			<EmailField />
			<PasswordField />
		</FormFieldGroup>

		<Button type="submit">Login</Button>
	</form>
</div>
