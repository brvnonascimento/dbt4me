import { auth } from '$lib/server/shared/infra/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals }) => {
		const session = await locals.validate();

		if (!session) {
			return fail(401);
		}

		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.setSession(null); // remove cookie

		throw redirect(303, '/');
	}
};
