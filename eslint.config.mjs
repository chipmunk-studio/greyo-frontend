import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';
import importX from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const ROOT = import.meta.dirname;

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  prettier,

  globalIgnores([
    '**/.react-router/**',
    '**/build/**',
    '**/.turbo/**',
    '**/.vercel/**',
    'coverage/**',
    'presentation/public/**',
  ]),

  {
    files: ['**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      'react': { version: 'detect' },
      'import-x/resolver': { node: { extensions: ['.ts', '.tsx', '.js', '.jsx'] } },
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-unused-expressions': 'error',
      // 한글 문장부호(따옴표·말줄임표)를 카피에 그대로 쓰기 위해 끈다.
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
    },
  },

  // ── 레이어 경계 ────────────────────────────────────────────────────────
  // 의존 방향: entities → application → infrastructure → di → presentation.
  // presentation 은 구현체(infrastructure)를 직접 알지 못하고 di 를 경유한다.
  {
    files: ['presentation/src/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@greyo-frontend/infrastructure',
              message:
                'presentation 은 infrastructure 를 직접 import 할 수 없습니다. @greyo-frontend/di 를 경유하세요.',
            },
          ],
          patterns: [
            {
              group: ['@greyo-frontend/infrastructure/*'],
              message:
                'presentation 은 infrastructure 를 직접 import 할 수 없습니다. @greyo-frontend/di 를 경유하세요.',
            },
          ],
        },
      ],
    },
  },

  // entities 는 어떤 레이어에도 의존하지 않는다.
  {
    files: ['entities/src/**/*.ts', 'core/src/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@greyo-frontend/*'],
              message: 'entities·core 는 최하위 레이어입니다. 다른 레이어를 참조할 수 없습니다.',
            },
          ],
        },
      ],
    },
  },

  // 공유 모듈이 화면(app/)을 역참조하지 못하게 막는다.
  {
    files: [
      'presentation/src/components/**/*',
      'presentation/src/hooks/**/*',
      'presentation/src/providers/**/*',
    ],
    plugins: { 'import-x': importX },
    rules: {
      'import-x/no-restricted-paths': [
        'error',
        {
          basePath: ROOT,
          zones: [
            {
              target: './presentation/src/{components,hooks,providers}/**/*',
              from: './presentation/src/app/**/*',
              message: '공유 모듈에서 app/을 참조할 수 없습니다. 의존 방향: app → 공유 모듈',
            },
          ],
        },
      ],
    },
  },
]);
