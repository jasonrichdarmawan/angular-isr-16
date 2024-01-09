import { Component, Inject, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

/**
 * generate groups of 4 random characters
 * @example getUniqueId(1) : 607f
 * @example getUniqueId(2) : 95ca-361a
 * @example getUniqueId(4) : 6a22-a5e6-3489-896b
 */
function getUniqueId(parts: number): string {
  const stringArr = [];
  for(let i = 0; i < parts; i++){
    // tslint:disable-next-line:no-bitwise
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return stringArr.join('-');
}

const UUID_V4_FROM_SERVER_KEY = makeStateKey<string>('UUID_V4_FROM_SERVER');

@Component({
  selector: 'app-uuidv4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uuidv4.component.html',
  styleUrls: ['./uuidv4.component.scss']
})
export class Uuidv4Component {
  readonly isServer: boolean;
  readonly timeZone: string;
  readonly uuidv4FromClient: string;
  readonly uuidv4FromServer: string;

  constructor(
    route: ActivatedRoute,
    @Inject(PLATFORM_ID) platformID: Object,
    private transferState: TransferState,
  ) {
    this.timeZone = route.snapshot.queryParamMap.get('timeZone') ?? "";

    this.isServer = isPlatformServer(platformID);

    this.uuidv4FromClient = this.isServer ? "server" : "10000000-1000-4000-8000-100000000000".replace(/[0148]/g, c =>
      (parseInt(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c) / 4).toString(16)
    );

    if (this.transferState.hasKey(UUID_V4_FROM_SERVER_KEY)) {
      this.uuidv4FromServer = this.transferState.get(UUID_V4_FROM_SERVER_KEY, '');
    } else {
      this.uuidv4FromServer = getUniqueId(4);
      this.transferState.set(UUID_V4_FROM_SERVER_KEY, this.uuidv4FromServer);
    }
  }

}
