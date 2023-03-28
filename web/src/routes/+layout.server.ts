import { handleServerSession } from '@lucia-auth/sveltekit';
import type { LayoutServerLoadEvent } from './$types';

export const load = handleServerSession(async ({ locals: { locale } }: LayoutServerLoadEvent) => {
	return { locale };
});
