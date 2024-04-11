import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleListComponent } from './example-list/example-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentListComponent } from './current-list/current-list.component';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe';
import { FormComponent } from './form/form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddListFormComponent } from './add-list-form/add-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleListComponent,
    CurrentListComponent,
    FilterPipe,
    FormComponent,
    AddListFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSortModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
