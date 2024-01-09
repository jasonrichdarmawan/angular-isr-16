import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly timeZone: string;

  constructor(
    @Inject(PLATFORM_ID) platformID: Object,
  ) {
    let isServer = isPlatformServer(platformID);

    this.timeZone = isServer ? "server" : Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
}
