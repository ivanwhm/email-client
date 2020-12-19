import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmailCreateComponent } from './components/email-create/email-create.component';
import { EmailIndexComponent } from './components/email-index/email-index.component';
import { EmailReplyComponent } from './components/email-reply/email-reply.component';
import { EmailShowComponent } from './components/email-show/email-show.component';
import { HomeComponent } from './components/home/home.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { EmailNotFoundComponent } from './components/email-not-found/email-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailShowComponent,
    PlaceholderComponent,
    EmailNotFoundComponent,
  ],
  imports: [CommonModule, InboxRoutingModule],
})
export class InboxModule {}
