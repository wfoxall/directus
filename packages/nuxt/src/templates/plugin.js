import { Directus } from '@directus/sdk';
import consola from 'consola';

const logger = consola.withTag('@directus/nuxt');

const directusPlugin = async (context, inject) => {
	const { url, auth } = <%= JSON.stringify(options, null, 2) %>;

	const directus = new Directus(url);
	logger.info(`Initialized Directus module target url as "${url}".`);

	if (auth.email && auth.password) {
		logger.info(`logging in as ${auth.email}...`);
		try {
			await directus.auth.login({ email: auth.email, password: auth.password });
		} catch (err) {
			logger.error(err);
		}
	} else if (auth.token) {
		logger.info(`logging in with provided static token...`);
		try {
			await directus.auth.static(auth.token);
		} catch (err) {
			logger.error(err);
		}
	}

	inject('directus', directus);
	logger.info('module loaded.');
};

export default directusPlugin;
