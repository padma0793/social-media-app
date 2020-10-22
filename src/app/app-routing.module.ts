import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: '/app-container',
  pathMatch: 'full'
}
,{
  path: 'header',
  loadChildren: () => import('./shared/header/header.module').then(m => m.HeaderModule)
},{
  path: 'search',
  loadChildren: () => import('./shared/search/search.module').then(m => m.SearchModule)
},{
  path: 'contacts',
  loadChildren: () => import('./shared/contacts/contacts.module').then(m => m.ContactsModule)
},
{
  path: 'app-container',
 loadChildren: () => import('./app-container/app-container.module').then(m => m.AppContainerModule)
},
{
  path: 'app-app-list',
 loadChildren: () => import('./shared/app-list/app-list.module').then(m => m. AppListModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
