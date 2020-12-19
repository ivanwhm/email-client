import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailShowComponent } from './components/email-show/email-show.component';
import { HomeComponent } from './components/home/home.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { EmailResolverService } from './resolvers/email-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: {
          email: EmailResolverService,
        },
      },
      {
        path: '',
        component: PlaceholderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
