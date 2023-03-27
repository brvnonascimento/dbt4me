<div class="layout">
	<section>
		<slot />
	</section>
</div>

<style lang="postcss">
	.layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;

		& > section {
			padding-block: 10vh;
			padding-inline: min(5vw, 2rem);
			border: 0.125rem solid var(--color-body-text);
			background: var(--color-orange-400);
			overflow: hidden;
			width: min(95vw, 30rem);
			display: grid;

			& > :global(*) {
				grid-area: 1 / 1;
			}

			:global(form) {
				padding-top: 1.5rem;
			}
		}
	}
</style>
