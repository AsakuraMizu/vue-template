// @ts-check
import antfu from '@antfu/eslint-config';
// @ts-expect-error no type
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu({
  stylistic: {
    semi: true,
    overrides: {
      'style/arrow-parens': ['error', 'always'],
    },
  },
  unocss: false,
  formatters: true,
}, ...tailwind.configs['flat/recommended']);
