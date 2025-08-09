/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Configuração para build da biblioteca
  if (mode === 'lib') {
    return {
      plugins: [react(), tsconfigPaths()],
      build: {
        lib: {
          entry: path.resolve(dirname, 'src/index.ts'),
          name: 'ReactDesignSystem',
          fileName: 'index',
          formats: ['es']
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        },
        cssCodeSplit: false,
        sourcemap: true
      },
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    };
  }

  // Configuração padrão para desenvolvimento e Storybook
  return {
    plugins: [react(), tsconfigPaths()],
    test: {
      projects: [{
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }]
    }
  };
});