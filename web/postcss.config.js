export default {
	plugins: {
		'postcss-flexbugs-fixes': {},
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009'
			},
			stage: 3,
			features: {
				'custom-properties': false
			}
		},
		'@daltontan/postcss-import-json': {},
		'postcss-nested': {},
		'postcss-custom-media': {
			importFrom: ['src/styles/breakpoints.css']
		},
		'postcss-each': {},
		'postcss-each-variables': {},
		'postcss-subgrid': {
			ieHack: false
		}
	}
};
