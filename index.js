module.exports = {
    "env": {
      "es6": true,
      "node": true
    },
    "extends": [
      "eslint:recommended"
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "rules": {
      "array-bracket-spacing": ["error", "never"],
      "arrow-body-style": ["warn", "as-needed"],
      "arrow-parens": ["warn", "as-needed"],
      "arrow-spacing": "warn",
      "brace-style": ["warn", "1tbs"],
      "block-spacing": "warn",
      "camelcase": "warn",
      "class-methods-use-this": "warn",
      "comma-spacing": "warn",
      "curly": ["warn", "multi-line"],
      "dot-notation": "error",
      "eqeqeq": ["warn", "always"],
      "func-call-spacing": ["warn", "never"],
      "func-name-matching": "error",
      "generator-star-spacing": "warn",
      "indent": ["error", 4, { "SwitchCase": 1 }],
      "key-spacing": "warn",
      "keyword-spacing": ["warn", { "before": true, "after": true }],
      "linebreak-style": ["error", "unix"],
      "max-depth": "warn",
      "multiline-ternary": ["warn", "never"],
      "no-console": ["warn", { "allow": ["warn", "info", "error"] }],
      "no-duplicate-imports": "error",
      "no-else-return": "warn",
      "no-extra-bind": "error",
      "no-extra-parens": "error",
      "no-floating-decimal": "error",
      "no-lonely-if": "warn",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": ["warn", { "max": 1 }],
      "no-nested-ternary": "error",
      "no-new-object": "error",
      "no-return-await": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-useless-constructor": "warn",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "warn",
      "object-curly-spacing": ["warn", "always"],
      "object-curly-newline": ["warn", { "ObjectExpression": { "multiline": true, "consistent": true } }],
      "object-shorthand": "warn",
      "padded-blocks": ["warn", "never"],
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn",
      "prefer-exponentiation-operator": "warn",
      "prefer-numeric-literals": "warn",
      "prefer-rest-params": "warn",
      "prefer-spread": "warn",
      "prefer-template": "error",
      "quote-props": ["warn", "as-needed"],
      "quotes": ["error", "single"],
      "require-await": "warn",
      "rest-spread-spacing": "error",
      "semi": ["error", "never"],
      "space-before-blocks": ["warn", "always"],
      "space-before-function-paren": ["warn", "never"],
      "space-in-parens": ["warn", "never"],
      "space-infix-ops": "warn",
      "space-unary-ops": "warn",
      "spaced-comment": ["warn", "always", { "markers": ["!"] }],
      "strict": ["error", "never"],
      "template-curly-spacing": "warn",
      "yield-star-spacing": "warn",
      "yoda": "warn"
    }
}
