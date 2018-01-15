import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResultComponent } from './you-tube-search/search-result.component';
import { SearchBoxComponent } from './you-tube-search/search-box.component';
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
    MoreHttpRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule // <-- right here
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
