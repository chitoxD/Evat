import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'pagina2',
    loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina3',
    loadChildren: () => import('./pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
  {
    path: 'salida/:estado/:opcion_punteo/:punteo',
    loadChildren: () => import('./salida/salida.module').then( m => m.SalidaPageModule)
  },
  {
    path: 'extra',
    loadChildren: () => import('./extra/extra.module').then( m => m.ExtraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
