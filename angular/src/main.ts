import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { WithProperties, NgElement } from '@angular/elements';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

export interface Config {
  color: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'alert-element': NgElement & WithProperties<{ heading: string }>;
  }
}
