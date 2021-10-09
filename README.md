# @clickpick/eslint-config

ESLint config with TypeScript support for React projects.

## Installation

We recommend to use [yarn](https://classic.yarnpkg.com/en/docs/install/) for dependency management:

```shell
yarn add --dev typescript eslint @clickpick/eslint-config
```

## Setup

### 1) Configure ESLint

Add `"extends": "@clickpick"` to your ESLint config file.

An example `.eslintrc`:

```json
{
  "extends": "@clickpick"
}
```

### 2) Configure the ESLint TypeScript parser

This config requires knowledge of your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

For example:

```diff
 {
   "extends": "@clickpick"
+  "parserOptions": {
+    "project": "./tsconfig.json",
+    "tsconfigRootDir": "."
+  }
 }
```

## License

@clickpick/eslint-config is [MIT licensed](./LICENSE).
