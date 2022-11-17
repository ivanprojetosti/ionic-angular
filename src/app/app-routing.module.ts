import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'arquitetura-angular',
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
  {
    path: 'arquitetura-angular',
    loadChildren: () => import('./arquitetura-angular/arquitetura-angular.module').then(m => m.ArquiteturaAngularPageModule)
  },
  {
    path: 'momentjs',
    loadChildren: () => import('./momentjs/momentjs.module').then( m => m.MomentjsPageModule)
  },
  {
    path: 'ion-grid',
    loadChildren: () => import('./ion-grid/ion-grid.module').then( m => m.IonGridPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'ion-infinite-scroll',
    loadChildren: () => import('./ion-infinite-scroll/ion-infinite-scroll.module').then( m => m.IonInfiniteScrollPageModule)
  },
  {
    path: 'class-ionic',
    loadChildren: () => import('./class-ionic/class-ionic.module').then( m => m.ClassIonicPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
