import type { BaseTranslation } from '../i18n-types';

const login = {
	formHeader: {
		title: 'Login',
		subtitle: {
			text: 'Not yet a psychologist?',
			link: {
				text: 'Sign Up'
			}
		}
	}
};

const signUp = {
	formHeader: {
		title: 'Sign Up',
		subtitle: {
			text: 'Already a psychologist?',
			link: {
				text: 'Login'
			}
		}
	}
};

const en: BaseTranslation = {
	login,
	signUp
};

export default en;
