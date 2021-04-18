import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// Imported Syncfusion RichTextEditorModule from Rich Text Editor package
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AppComponent } from './app.component';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RichTextEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Registering EJ2 Rich Text Editor Module
    RichTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
