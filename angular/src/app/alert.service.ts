import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  show(text: string) {
    alert(`YOU ARE CLOSING: ${text}`);
  }
}
