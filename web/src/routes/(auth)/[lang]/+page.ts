import { setLocale } from '$i18n/i18n-svelte';
import type { PageLoad } from './$types';
import { get } from 'svelte/store';
import LL from '$i18n/i18n-svelte';

export const load: PageLoad = async (event) => {
	const { parent } = event;

	const { locale } = await parent();

	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(locale);
	// get the translation functions value from the store
	const $LL = get(LL);

	const title = $LL.title();

	return { title, locale };
};
