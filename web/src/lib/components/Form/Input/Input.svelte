<script lang="ts">
	export let type: 'text' | 'password' = 'text';
	export let placeholder = '';
	export let name = '';
	export let required = false;
	export let autocomplete: 'on' | 'off' | 'email' | 'password' = 'on';
</script>

<input {type} {placeholder} {name} {required} {autocomplete} />

<style lang="postcss">
	input {
		width: 100%;
		background: none;
		color: var(--color-body-text);
		font-size: inherit;

		&:placeholder {
			color: var(--color-orange-800);
		}

		&:focus {
			outline: none;
		}
	}
</style>
