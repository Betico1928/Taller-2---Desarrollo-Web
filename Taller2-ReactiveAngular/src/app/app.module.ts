import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './component/user-search/user-search.component';
import {FormsModule} from "@angular/forms";
import { ShowPostsComponent } from './component/show-posts/show-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    ShowPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
