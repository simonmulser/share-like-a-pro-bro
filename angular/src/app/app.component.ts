import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular elements</h1>

    <h2>Inserted directly</h2>
    <alert-element heading='My statically created alert'>
      <p slot="content">Content projection with slot.</p>
    </alert-element>

    <br />
    <hr />

    <h2>Create dynamically</h2>

    <input class="input" #inputMessage value="Message">
    <input class="input" #inputSlot value="Slot">
    <button (click)="show(inputMessage.value, inputSlot.value)">Show alert</button>
  `,
})
export class AppComponent {

  show(message: string, slot: string) {
    // Create element
    const alertEl = document.createElement('alert-element');
    alertEl.innerHTML = `
    <p slot="content">${slot}</p>
    `;

    // Listen to the close event
    alertEl.addEventListener('closed', () =>
      document.body.removeChild(alertEl)
    );

    // Set the message
    alertEl.heading = message;

    // Add to the DOM
    document.body.appendChild(alertEl);
  }
}
