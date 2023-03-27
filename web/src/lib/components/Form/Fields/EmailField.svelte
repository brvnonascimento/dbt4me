<script lang="ts">
	import InputHelperText from '$lib/components/Form/Input/InputHelperText.svelte';
	import type { Writable } from 'svelte/store';
	import Input from '../Input/Input.svelte';
	import InputField from '../Input/InputField.svelte';
	import InputWrapper from '../Input/InputWrapper.svelte';
	import Label from '../Input/Label.svelte';

	export let autocomplete: 'email' | 'off' = 'email';
	export let name: 'email' | 'new-email' = 'email';
</script>

<InputField>
	<Label>E-mail</Label>

	<InputWrapper>
		<Input placeholder="example@mail.com" required {autocomplete} {name} />
	</InputWrapper>

	<InputHelperText>We'll never share your email with anyone else.</InputHelperText>
</InputField>
