Applied Minds ESLint Config
===========================

Linting configuration used by [Applied Minds](https://www.appliedminds.com/) for all Node.js/Javascript projects.

Installation
------------

```shell
npm install @ami/eslint-config --save-dev
```

Usage
-----

### Node Projects

Add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@ami"
  }
}
```

### Vue Projects

Also install [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue):

```shell
npm install eslint-plugin-vue --save-dev
```

Then add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "env": { "browser": true },
    "extends": ["@ami", "plugin:vue/vue3-strongly-recommended"]
  }
}
```

Note: Use `plugin:vue/strongly-recommended` if developing with Vue.js 2.x.

License
-------

MIT
