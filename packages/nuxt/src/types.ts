import { Directus } from '@directus/sdk';

export interface DirectusNuxtOptions {
	url: string;
	auth: {
		email?: string;
		password?: string;
		token?: string;
	};
}

// Nuxt 2
declare module '@nuxt/types' {
	interface NuxtConfig {
		directus?: DirectusNuxtOptions;
	} // Nuxt 2.14+
	interface Configuration {
		directus?: DirectusNuxtOptions;
	} // Nuxt 2.9 - 2.13
	interface Context {
		$directus: Directus<any>;
	}
}

// @ts-expect-error: resolved by Nuxt3
declare module '@nuxt/schema' {
	interface NuxtConfig {
		directus?: DirectusNuxtOptions;
	}
	interface NuxtOptions {
		directus?: DirectusNuxtOptions;
	}
}

// @ts-expect-error: #app resolved by Nuxt3
declare module '#app' {
	interface NuxtApp {
		$directus: Directus<any>;
	}
}
