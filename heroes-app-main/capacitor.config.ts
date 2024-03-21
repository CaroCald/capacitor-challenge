import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.heroes.app',
  appName: 'heroesApp',
  webDir: 'dist/heroes-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
