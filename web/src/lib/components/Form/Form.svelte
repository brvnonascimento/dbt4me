<script lang="ts">
	export let method: 'POST' = 'POST';
</script>

<form {method}>
	<slot />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}
</style>
