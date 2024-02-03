# ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;
- Prettier Sort Imports;

## Setup

1. Install the dependencies
```
yarn add -D eslint @hyperlocal/eslint-config
```

2. Create a `.eslintrc.cjs` file extending the config:
```js
module.exports = {
    extends: [require.resolve("eslint-config/react")],
}
```

4. Update or add the scripts inside `package.json` to following:
```json
"lint": "eslint . --ext .cjs,.js,.ts,.tsx,.json",
"lint:fix": "eslint . --ext .cjs,.js,.ts,.tsx,.json --fix",
```