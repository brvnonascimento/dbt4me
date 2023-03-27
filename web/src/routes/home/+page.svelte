<script lang="ts">
	import { getUser } from '@lucia-auth/sveltekit/client';

	const user = getUser();
</script>

{#if $user?.userId}
	<h1>Home</h1>
	<h2>Welcome, {$user?.userId}!</h2>
{:else}
	<h1>Home</h1>
	<h2>Welcome!</h2>
{/if}
