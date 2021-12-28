# @directus/nuxt

Directus module for Nuxt.

_Note: Currently supports Nuxt 2 only_

## Install

Add `@directus/nuxt` dependency to your project:

```
npm install @directus/nuxt
```

Then add it to the `modules` section in your `nuxt.config.js`:

```js
export default {
	modules: ['@directus/nuxt'],
	directus: {
		// Options
	},
};
```

## Options

- `url` [*Required*] - should be a valid URL to your Directus instance

- `auth` [*Optional*] - defines if requests will have authentication or not. You should define this if you want access
  to non-public content.
  [View more about permissions](https://docs.directus.io/configuration/users-roles-permissions/#users-roles-permissions)

  - `auth.email` [*Optional, but required with password*] - should be the email of the user which will make the
    requests.

  - `auth.password` [*Optional, but required with email*] - should be the password of the user which will make the
    requests.

  - `auth.token` [*Optional, but ignored if `auth.email` and `auth.password` are defined*] - should be the static token
    of the user which will make the requests. You can define one on user detail page.

## Usage

This module globally injects `$directus` instance, meaning that you can access it anywhere using `this.$directus`. For
plugins, asyncData, fetch, nuxtServerInit and Middleware, you can access it from `context.$directus`.

The `$directus` instance uses the Directus JavaScript SDK under the hood, so you have access to the methods available to
it. [Learn more about the SDK here](https://docs.directus.io/reference/sdk/).

### Examples

#### asyncData

```vue
<template>
	<pre>{{ articles }}</pre>
</template>

<script>
export default {
	async asyncData({ $directus }) {
		const response = await $directus.items('articles').readMany();
		const articles = response.data;
		return { hero, articles };
	},
};
</script>
```

[Learn more about Nuxt asyncData() hook here](https://nuxtjs.org/docs/features/data-fetching#async-data).

#### fetch

```vue
<template>
	<pre>{{ articles }}</pre>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
		};
	},
	async fetch() {
		const response = await this.$directus.items('articles').readMany();
		this.articles = response.data;
	},
};
</script>
```

[Learn more about Nuxt fetch() hook here](https://nuxtjs.org/docs/components-glossary/fetch/).

## Docs

[View more about Directus](https://docs.directus.io/)
