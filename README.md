Applied Minds ESLint Config
===========================

Linting configuration used by [Applied Minds](https://www.appliedminds.com/) for all Node.js/Javascript projects.

Installation
------------

```shell
npm install @ami/eslint-config
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

Add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "env": { "browser": true },
    "extends": ["@ami", "plugin:vue/essential"]
  }
}
```

License
-------

MIT
