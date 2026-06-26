import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

try {
  setupZoneTestEnv();
} catch {
  // Bereits durch das Preset initialisiert – ignorieren
}