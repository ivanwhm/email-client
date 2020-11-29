import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, InboxRoutingModule],
})
export class InboxModule {}
