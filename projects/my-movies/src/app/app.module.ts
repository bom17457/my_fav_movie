import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserComponent } from './browser/browser.component';
import { FavComponent } from './fav/fav.component';
import { HttpClientModule } from '@angular/common/http';
import { MovielistComponent } from './movielist/movielist.component';
import { PopularComponent } from './popular/popular.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LatestComponent } from './latest/latest.component';
import { HttpInterceptorProviders } from './http-inceptors';
import { MovieItemComponent } from './movielist/movie-item/movie-item.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginWithThemoviedbComponent } from './login-with-themoviedb/login-with-themoviedb.component';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { WatchProviderComponent } from './watch-provider/watch-provider.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BrowserComponent,
    FavComponent,
    MovielistComponent,
    PopularComponent,
    UpcomingComponent,
    LatestComponent,
    MovieItemComponent,
    LoginFormComponent,
    LoginWithThemoviedbComponent,
    SearchSidebarComponent,
    SearchFormComponent,
    SearchComponent,
    WatchProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    ScrollingModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpInterceptorProviders,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
