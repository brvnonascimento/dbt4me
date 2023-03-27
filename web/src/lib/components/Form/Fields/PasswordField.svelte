<script lang="ts">
	import Input from '../Input/Input.svelte';
	import InputField from '../Input/InputField.svelte';
	import InputWrapper from '../Input/InputWrapper.svelte';
	import Label from '../Input/Label.svelte';

	export let autocomplete: 'password' | 'off' = 'password';
	export let name: 'password' | 'new-password' = 'password';
</script>

<InputField>
	<Label>Password</Label>

	<InputWrapper>
		<Input placeholder="****************" type="password" required {autocomplete} {name} />
	</InputWrapper>
</InputField>
