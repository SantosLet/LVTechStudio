import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js";

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "indent": ["error", 2, {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "MemberExpression": 1,
        "FunctionDeclaration": { "parameters": 1, "body": 1 },
        "FunctionExpression": { "parameters": 1, "body": 1 },
        "CallExpression": { "arguments": 1 },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoreComments": false,
      }],

      "semi": ["error", "always"],
      "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
      "comma-dangle": ["error", "always-multiline"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
      "eol-last": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
      }],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "space-before-blocks": ["error", "always"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "max-len": ["warn", { "code": 100, "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
      "camelcase": ["error", { "properties": "never", "ignoreDestructuring": true, "allow": ["^UNSAFE_"] }],
      "newline-before-return": "error",
      "no-var": "error",
      "prefer-const": ["error", { "destructuring": "all" }],
      "prefer-arrow-callback": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-duplicate-imports": "error",
      "no-undef-init": "error",
      "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }],
      "no-trailing-spaces": "error",
      "no-multi-spaces": "error",
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
        { "blankLine": "always", "prev": "directive", "next": "*" },
        { "blankLine": "always", "prev": ["if", "for", "while", "switch", "try"], "next": "*" },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "dist/**",
    "coverage/**",
    ".git/**",
  ]),
]);

export default eslintConfig;
