<script lang="ts">
	export let type: 'button' | 'submit' = 'button';
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

<button {type} class:primary={variant === 'primary'} class:secondary={variant === 'secondary'}
	><slot /></button
>

<style lang="postcss">
	button {
		width: max-content;
		color: var(--color-body-text);
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-body-small);
		border: none;
		padding: 0.75rem 1rem;

		&[type='submit'] {
			width: 100%;
		}
	}

	.primary {
		background: var(--color-primary);
		color: var(--color-body-text-inverted);
		border: 1px solid var(--color-body-text);
	}

	.secondary {
		background: var(--color-body-text-inverted);
	}
</style>
