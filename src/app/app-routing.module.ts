import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'router',
    pathMatch: 'full'
  },
  {
    path: 'ngif',
    loadChildren: () => import('./ngif/ngif.module').then(m => m.NgifPageModule)
  },
  {
    path: 'ngfor',
    loadChildren: () => import('./ngfor/ngfor.module').then(m => m.NgforPageModule)
  },
  {
    path: 'router',
    loadChildren: () => import('./router/router.module').then(m => m.RouterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
