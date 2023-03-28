<script lang="ts">
	import '@fontsource/quicksand';
	import '../styles/breakpoints.css';
	import '../styles/globals.css';

	import { page } from '$app/stores';
	import { handleSession } from '@lucia-auth/sveltekit/client';

	handleSession(page);
</script>

<svelte:head>
	<meta name="theme-color" content="#FFC793" />
	<title>dbt4me</title>
</svelte:head>

<nav>
	<a href={`/en`} data-sveltekit-reload>en</a>
	<a href={`/pt-BR`} data-sveltekit-reload> pt-BR</a>
</nav>

<!-- <header>
	{#if $user?.userId}
		<form use:enhance method="POST" action="/logout">
			<input type="submit" value="Sign out" />
		</form>
	{:else}
		<a href="/">Login</a>
	{/if}
</header> -->

<slot />

<style lang="postcss">
	nav {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		position: fixed;
		top: 0;
		right: 0;

		& a {
			padding: 0.5rem 1rem;
		}
	}
</style>
