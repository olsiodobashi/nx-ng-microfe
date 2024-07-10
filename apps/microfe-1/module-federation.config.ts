import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'microfe-1',
  exposes: {
    './Routes': 'apps/microfe-1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
