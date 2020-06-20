AMI ESLint Config
=================

Recommended linting configuration for AMI Node/Javascript projects.

Installation
------------

Ensure the local AMI registry is being used:

```shell
npm set -g @ami:registry http://npm:4873
```

Then simply install:

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
