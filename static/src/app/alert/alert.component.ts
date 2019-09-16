import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  styles: [`
  button {
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
  }
  button:hover {
    background-color: #cfd8dc;
  }

  * {
    font-family: Arial, Helvetica, sans-serif;
  }`
]
  ,
  template: `
    <div class="alert alert-{{ type }} alert-dismissible" *ngIf="show">
      {{ content }}
      <button type="button" class="close" (click)="show = false; closed.emit()">
        <span>&times;</span>
      </button>
    </div>
  `
})
export class AlertComponent {
  @Input() content;
  @Input() type = 'success';
  @Output() closed = new EventEmitter();

  show = true;
}
