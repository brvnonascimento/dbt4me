<div class="form-field-group">
	<slot />
</div>

<style lang="postcss">
	.form-field-group {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		min-width: 18.625rem;
		width: 100%;
	}

	:global(.form-field-group ~ button) {
		margin-top: 1.5rem;
	}
</style>
