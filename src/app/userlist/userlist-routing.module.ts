import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthguardGuard } from '../@shared/guards/unauthguard.guard';
import { UserlistComponent } from './userlist.component';

const routes: Routes = [
  {
    path: 'userlist',
    component: UserlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserlistRoutingModule {}
