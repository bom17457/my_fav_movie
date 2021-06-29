import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { FavComponent } from './fav/fav.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginWithThemoviedbComponent } from './login-with-themoviedb/login-with-themoviedb.component';

const routes: Routes = [
  { path: '', component: BrowserComponent },
  { path: 'favourite', component: FavComponent },
  { path: 'login', component: LoginWithThemoviedbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
