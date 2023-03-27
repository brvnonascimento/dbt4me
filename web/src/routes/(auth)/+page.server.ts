import { auth, createUserInputSchema } from '$lib/server/shared/infra/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const form = await superValidate(event, createUserInputSchema);

	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, createUserInputSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { data } = form;

		try {
			const key = await auth.useKey('email', data.email, data.password);

			const session = await auth.createSession(key.userId);

			event.locals.setSession(session);
		} catch (error) {
			// invalid credentials
			return fail(400);
		}

		throw redirect(303, '/home');
	}
};
