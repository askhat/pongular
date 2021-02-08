import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircComponent } from './shapes/circ.component';
import { RectComponent } from './shapes/rect.component';
import { PxPipe } from './px.pipe';

@NgModule({
  declarations: [AppComponent, RectComponent, CircComponent, PxPipe],
  imports: [BrowserModule],
  providers: [PxPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
