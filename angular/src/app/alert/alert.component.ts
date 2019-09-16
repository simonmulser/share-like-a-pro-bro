import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  template: `
    <div class="alert alert-{{ type }} alert-dismissible" *ngIf="show">
      <div class="heading">
        <h5 class="heading__text">{{ heading }}</h5>
        <button type="button" class="close" (click)="close()">
          <span>&times;</span>
        </button>
      </div>
      <slot name="content"></slot>
    </div>
  `,
  styleUrls: ['alert.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AlertComponent {
  @Input() heading: string;
  @Input() type = 'success';
  @Output() closed = new EventEmitter();
  show = true;

  constructor(public alertService: AlertService){
  }

  close() {
    this.show = false;
    this.closed.emit();
    this.alertService.show(this.heading);
  }

}
