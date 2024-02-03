module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        semi: true,
        endOfLine: "auto",
        importOrder: ["<THIRD_PARTY_MODULES>", "^~/(.*)$", "^[./]|^[..]"],
        importOrderSeparation: false,
        importOrderSortSpecifiers: true,
        importOrderBuiltinModulesToTop: true,
        importOrderMergeDuplicateImports: true,
        importOrderCombineTypeAndValueImports: true,
        plugins: ["@ianvs/prettier-plugin-sort-imports"],
      },
    ],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        argsIgnorePattern: "_",
      },
    ],
  },
  overrides: [
    {
      files: ["*.json"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
