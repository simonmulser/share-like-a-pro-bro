import { AlertComponent } from './alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AlertComponent],
  imports: [BrowserModule],
  entryComponents: [AlertComponent],
})
export class AlertModule {
  constructor(injector: Injector) {
    // Convert `AlertComponent` to a custom element.
    const alert = createCustomElement(AlertComponent, { injector });

    // Register the custom element with the browser.
    customElements.define('alert-element', alert);
  }
}
