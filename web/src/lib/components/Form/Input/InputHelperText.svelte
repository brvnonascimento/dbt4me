<script lang="ts">
	export let isInvalid: boolean | undefined = undefined;
</script>

<p data-is-invalid={isInvalid}><slot /></p>

<style lang="postcss">
	p {
		font-size: var(--font-size-body-extra-small);
		margin-top: 0.25rem;
		min-height: 3ch;

		&[data-is-invalid='true'] {
			color: var(--color-error);
		}
	}
</style>
