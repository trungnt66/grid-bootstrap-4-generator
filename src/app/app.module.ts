import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';
import { TextRendererComponent } from './text-renderer/text-renderer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    RowComponent,
    ColComponent,
    TextRendererComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
