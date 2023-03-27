import { auth } from '$lib/server/shared/infra/auth';
import { handleHooks } from '@lucia-auth/sveltekit';

export const handle = handleHooks(auth);
