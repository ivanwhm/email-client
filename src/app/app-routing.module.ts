import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'inbox',
    canLoad: [AuthGuard],
    loadChildren: () => import('./features/inbox/inbox.module').then((mod) => mod.InboxModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
