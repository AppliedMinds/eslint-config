Applied Minds ESLint Config
===========================

Linting configuration used by [Applied Minds](https://www.appliedminds.com/) for all Node.js/Javascript projects.

Includes a configuration for usage with [Vue.js](https://vuejs.org/).

Installation
------------

```shell
npm install @appliedminds/eslint-config --save-dev
```

Usage
-----

### Node Projects

Add the following to your `eslint.config.js`:

```js
import jsConfig from '@appliedminds/eslint-config'

export default [
    ...jsConfig,
    {
        rules: {
            // your overrides, etc
        }
    }
]
```

The Applied Minds linting configuration generally follows the [Standard Javascript](https://standardjs.com/) style with main exception:

 * Readability: Use 4-space indents

### Vue Projects

Also install [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue):

```shell
npm install eslint-plugin-vue --save-dev
```

Then add the following to your `eslint.config.js`:

```js
import jsConfig from '@appliedminds/eslint-config'
import vueConfig from '@appliedminds/eslint-config/vue.js'

export default [
    ...jsConfig,
    ...vueConfig,
    // overrides, etc
]
```

The Applied Minds Vue linting configuration follows the [_Vue Strongly Recommended_ config](https://eslint.vuejs.org/user-guide/#bundle-configurations-eslint-config-js) style, but modifies the following:

 * Readability: Use 4-space indents
 * Readability: Allow up to 3 attributes per line to more effectively use horizontal space and prevent excessive line breaks
 * Unnecessary: Remove multi-word component name enforcement. Well-named single-word components should be allowed.

License
-------

MIT
