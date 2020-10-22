import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { SearchComponent } from './shared/search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppListComponent } from './shared/app-list/app-list.component';
import { AppContainerComponent } from './app-container/app-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SearchComponent,
    HeaderComponent,
    //AppListComponent,
    AppContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
