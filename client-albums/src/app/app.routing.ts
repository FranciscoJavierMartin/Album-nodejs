import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AlbumsListComponent} from './components/album-list.component';

const appRoutes: Routes=[
  {path:'',component: AlbumsListComponent},
  {path: '*', component: AlbumsListComponent}
];

export const appRoutingProviders: any[]=[];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
