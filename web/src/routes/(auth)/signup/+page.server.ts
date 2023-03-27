import { auth, createUserInputSchema } from '$lib/server/shared/infra/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		const createNewUserInput = createUserInputSchema.safeParse({ email, password });

		if (!createNewUserInput.success) {
			return fail(400, {
				message: 'Invalid input',
				error: createNewUserInput.error
			});
		}

		await auth.createUser({
			primaryKey: {
				providerId: 'email',
				providerUserId: createNewUserInput.data.email,
				password: createNewUserInput.data.password
			},
			attributes: {
				email: createNewUserInput.data.email
			}
		});

		throw redirect(303, '/');
	}
};
