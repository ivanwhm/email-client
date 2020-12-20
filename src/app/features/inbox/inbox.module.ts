import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EmailCreateComponent } from './components/email-create/email-create.component';
import { EmailIndexComponent } from './components/email-index/email-index.component';
import { EmailNotFoundComponent } from './components/email-not-found/email-not-found.component';
import { EmailReplyComponent } from './components/email-reply/email-reply.component';
import { EmailShowComponent } from './components/email-show/email-show.component';
import { HomeComponent } from './components/home/home.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { EmailFormComponent } from './components/email-form/email-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailShowComponent,
    PlaceholderComponent,
    EmailNotFoundComponent,
    EmailFormComponent,
  ],
  imports: [CommonModule, InboxRoutingModule, SharedModule],
})
export class InboxModule {}
