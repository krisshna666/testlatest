import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginguardGuard } from 'src/app/@shared/guards/loginguard.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginguardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
