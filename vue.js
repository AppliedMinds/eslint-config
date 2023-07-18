module.exports = {
    "env": {
      "browser": true,
      "vue/setup-compiler-macros": true
    },
    "extends": [
      "plugin:vue/vue3-strongly-recommended"
    ],
    "rules": {
      "vue/html-indent": ["error", 4],
      "vue/max-attributes-per-line": ["error", { "singleline": { "max": 3 } }],
	"vue/no-mutating-props": ["error", { "shallowOnly": true }],
      "vue/multi-word-component-names": "off"
    }
}
