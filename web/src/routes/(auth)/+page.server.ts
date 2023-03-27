import { auth, createUserInputSchema } from '$lib/server/shared/infra/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		const userInput = createUserInputSchema.safeParse({ email, password });

		if (!userInput.success) {
			return fail(400, {
				message: 'Invalid input',
				error: userInput.error
			});
		}

		try {
			const key = await auth.useKey('email', userInput.data.email, userInput.data.password);

			const session = await auth.createSession(key.userId);

			locals.setSession(session);
		} catch (error) {
			// invalid credentials
			return fail(400);
		}

		throw redirect(303, '/home');
	}
};
