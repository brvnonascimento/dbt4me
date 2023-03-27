<label>
	<slot />
</label>

<style lang="postcss">
	label {
		display: flex;
		flex-direction: column;
		font-size: var(--font-size-body-normal);
		transition: color 0.25s ease-in-out;

		&:hover {
			color: var(--color-purple-800);
		}

		&:focus-within {
			color: var(--color-purple-600);
		}
	}
</style>
