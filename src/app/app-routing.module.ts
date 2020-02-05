import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    { path: 'serviceUser', component: UserComponent }
  ]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}