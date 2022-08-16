import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthguardGuard } from '../guards/unauthguard.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [UnauthguardGuard],
    children: [
      {
        path: 'userlist',
        loadChildren: () =>
          import('../../userlist/userlist.module').then(
            (m) => m.UserlistModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
