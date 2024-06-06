// @ts-check
import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
    overrides: {
      'style/arrow-parens': ['error', 'always'],
    },
  },
  unocss: true,
  formatters: true,
});
