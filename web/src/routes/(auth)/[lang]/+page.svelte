<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
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
		taintedMessage: null
	});
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
	<h1>
		{$LL.login.formHeader.title()}
	</h1>
	<p>
		{$LL.login.formHeader.subtitle.text()}
		<a href={`${$locale}/signup`}> {$LL.login.formHeader.subtitle.link.text()}</a>
	</p>

	<form method="POST" use:enhance>
		<FormFieldGroup>
			<InputField>
				<Label>E-mail</Label>

				<input
					name="email"
					placeholder="example@mail.com"
					bind:value={$form.email}
					{...$constraints.email}
				/>

				<InputHelperText isInvalid={!!$errors.email}
					>{#if $errors.email}
						{$errors.email}
					{/if}
				</InputHelperText>
			</InputField>

			<InputField>
				<Label>Password</Label>

				<input
					name="password"
					placeholder="****************"
					type="password"
					bind:value={$form.password}
					{...$constraints.password}
				/>

				<InputHelperText isInvalid={!!$errors.email}
					>{#if $errors.password}
						{$errors.password}
					{/if}
				</InputHelperText>
			</InputField>
		</FormFieldGroup>

		<Button type="submit">Login</Button>
	</form>
</div>
