import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/@modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/userlist/userlist.module').then((m) => m.UserlistModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
