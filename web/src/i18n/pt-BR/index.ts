import type { Translation } from '../i18n-types';

const login = {
	formHeader: {
		title: 'Login',
		subtitle: {
			text: 'Ainda não é um psicólogo?',
			link: {
				text: 'Cadastre-se'
			}
		}
	}
};

const signUp = {
	formHeader: {
		title: 'Cadastro',
		subtitle: {
			text: 'Já é um psicólogo?',
			link: {
				text: 'Login'
			}
		}
	}
};

const ptBR: Translation = {
	// this is an example Translation, just rename or delete this folder if you want
	login,
	signUp
};

export default ptBR;
