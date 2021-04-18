import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import the MultiSelectModule for the MultiSelect component
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppComponent } from './app.component';

import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselect-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiselectDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
