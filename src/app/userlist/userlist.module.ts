import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UserlistComponent } from './userlist.component';
@NgModule({
  declarations: [UserlistComponent],
  imports: [CommonModule, UserlistRoutingModule, NzSelectModule],
})
export class UserlistModule {}
