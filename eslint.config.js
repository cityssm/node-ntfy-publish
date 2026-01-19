import baseConfig, { defineConfig } from 'eslint-config-cityssm/eslint.packageConfig.js';
import { cspellWords } from 'eslint-config-cityssm/exports';
export const config = defineConfig(baseConfig, {
    files: ['**/*.ts'],
    rules: {
        '@cspell/spellchecker': [
            'warn',
            {
                cspell: {
                    words: [...cspellWords, 'ntfy']
                }
            }
        ]
    }
});
export default config;
