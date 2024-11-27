import eslint from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: [
          "packages/test/**/*.js",
          "**/docs/**",
          "**/examples/**",
          "**/template/**"
        ]
    },
    eslint.configs.recommended,
    {
        name:"facile",
        languageOptions:{
            ecmaVersion:2024,
            sourceType:"module",
            globals:{
                ...globals.node,
                ...globals.es
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];
