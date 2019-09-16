import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [BrowserModule],
  providers: [AppComponent],
  bootstrap: [],
  entryComponents: [AppComponent, AlertComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // Convert `AlertComponent` to a custom element.
    const alert = createCustomElement(AlertComponent, {
      injector: this.injector
    });

    // Register the custom element with the browser.
    customElements.define('alert-element', alert);
  }
}
