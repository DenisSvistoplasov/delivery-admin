import baseConfig from '@tinkoff/eslint-config';
import reactConfig from '@tinkoff/eslint-config-react';

export default [
  ...baseConfig,
  ...reactConfig,
  {
    rules: {
      'react/function-component-definition': 'off',
      // Tramvai Link uses the `url` prop instead of a native anchor `href`.
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
];
