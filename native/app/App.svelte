<script lang="ts">
	import Home from './components/Home.svelte';
</script>

<frame>
	<Home />
</frame>

<style>
	:global(page) {
		--color-background: black;
		--color-text: #ffffff;

		background: var(--color-background);
		color: var(--color-text);
	}
</style>
