import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run monorepo:serve:development',
        production: 'nx run monorepo:serve:production',
      },
      ciWebServerCommand: 'nx run monorepo:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
