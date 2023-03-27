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

	const { form, enhance, errors, constraints } = superForm(data.form);
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
			<InputField>
				<Label>E-mail</Label>

				<input
					placeholder="example@mail.com"
					required
					autocomplete="off"
					bind:value={$form.email}
					{...$constraints.email}
				/>

				<InputHelperText
					>{#if $errors.email}
						{$errors.email}
					{/if}
				</InputHelperText>
			</InputField>

			<InputField>
				<Label>Password</Label>

				<input
					placeholder="****************"
					type="password"
					required
					autocomplete="off"
					bind:value={$form.password}
				/>

				<InputHelperText
					>{#if $errors.password}
						{$errors.password}
					{/if}
				</InputHelperText>
			</InputField>
		</FormFieldGroup>

		<Button type="submit">Login</Button>
	</form>
</div>
