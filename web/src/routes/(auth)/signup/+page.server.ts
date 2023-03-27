import { auth, createUserInputSchema } from '$lib/server/shared/infra/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async (event) => {
	const form = await superValidate(event, createUserInputSchema);

	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, createUserInputSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { data } = form;

		await auth.createUser({
			primaryKey: {
				providerId: 'email',
				providerUserId: data.email,
				password: data.password
			},
			attributes: {
				email: data.email
			}
		});

		throw redirect(303, '/');
	}
};
