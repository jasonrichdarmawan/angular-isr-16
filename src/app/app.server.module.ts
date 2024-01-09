import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { provideISR } from '@rx-angular/isr';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    provideISR(),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
