<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import FormFieldGroup from '$lib/components/Form/Fields/FormFieldGroup.svelte';
	import InputField from '$lib/components/Form/Input/InputField.svelte';
	import InputHelperText from '$lib/components/Form/Input/InputHelperText.svelte';
	import Label from '$lib/components/Form/Input/Label.svelte';
	import { expoInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, enhance, errors, constraints } = superForm(data.form, {
		taintedMessage: `You haven't completed registration. Are you sure you want to leave?`
	});
</script>

<div
	in:fly={{
		x: '100%',
		easing: expoInOut,
		duration: 500,
		opacity: 0
	}}
	out:fly={{
		x: '100%',
		easing: expoInOut,
		duration: 500,
		opacity: 0
	}}
>
	<h1>Sign Up</h1>
	<p>
		Not a <strong>psychologist</strong>? <a href="/"><strong>Login</strong></a>
	</p>

	<form method="POST" use:enhance>
		<FormFieldGroup>
			<InputField>
				<Label>E-mail</Label>

				<input
					name="email"
					placeholder="example@mail.com"
					required
					autocomplete="off"
					bind:value={$form.email}
					{...$constraints.email}
				/>

				<InputHelperText isInvalid={!!$errors.email}
					>{#if $errors.email}
						{$errors.email}
					{:else}
						We'll never share your email with anyone else.
					{/if}</InputHelperText
				>
			</InputField>

			<InputField>
				<Label>Password</Label>

				<input
					name="password"
					placeholder="****************"
					type="password"
					required
					autocomplete="off"
					bind:value={$form.password}
					{...$constraints.password}
				/>

				<InputHelperText isInvalid={!!$errors.password}
					>{#if $errors.password}
						{$errors.password}
					{:else}
						At least 8 characters combining numbers and special characters like @!#$%
					{/if}
				</InputHelperText>
			</InputField>
		</FormFieldGroup>

		<Button type="submit">Sign Up</Button>
	</form>
</div>
