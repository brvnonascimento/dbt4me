import LL, { setLocale } from '$i18n/i18n-svelte';
import { auth, createUserInputSchema } from '$lib/server/shared/infra/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { get } from 'svelte/store';

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, createUserInputSchema);

	const { parent } = event;

	const { locale } = await parent();

	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(locale);
	// get the translation functions value from the store
	const $LL = get(LL);

	return {
		form,
		locale,
		copywriting: {
			title: $LL.signUp.formHeader.title(),
			subtitle: {
				text: $LL.signUp.formHeader.subtitle.text(),
				link: {
					text: $LL.signUp.formHeader.subtitle.link.text()
				}
			}
		}
	};
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
