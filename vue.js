import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

export default [
    ...pluginVue.configs['flat/strongly-recommended'],
    {
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            "vue/html-indent": ["error", 4],
            "vue/max-attributes-per-line": ["error", { "singleline": { "max": 3 } }],
            "vue/no-mutating-props": ["error", { "shallowOnly": true }],
            "vue/multi-word-component-names": "off"
        }
    }
]
