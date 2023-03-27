<script lang="ts">
	import '@fontsource/quicksand';
	import '../styles/globals.css';

	import { page } from '$app/stores';
	import { handleSession } from '@lucia-auth/sveltekit/client';

	handleSession(page);
</script>

<svelte:head>
	<meta name="theme-color" content="#FFC793" />
	<title>dbt4me</title>
</svelte:head>

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
