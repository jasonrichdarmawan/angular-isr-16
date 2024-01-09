import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly timeZone: string;

  constructor() {
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
}
