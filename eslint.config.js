import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from "svelte-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginSvelte.configs['flat/recommended'],
    {
        files: ["**/*.svelte", "*.svelte"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: tsParser,
            },
            globals: {
                ...globals.browser
            }
        },
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_"
                }
            ]
        }
    },
];
