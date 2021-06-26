import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { FavComponent } from './fav/fav.component';

const routes: Routes = [
  { path: '', component: BrowserComponent },
  { path: 'favourite', component: FavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
