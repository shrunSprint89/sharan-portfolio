import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run portfolio-react-app:serve',
        production: 'nx run portfolio-react-app:preview',
      },
      ciWebServerCommand: 'nx run portfolio-react-app:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
