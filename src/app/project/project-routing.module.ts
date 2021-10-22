import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const projectRoutes: Routes = [{
  path: 'project', component: AnimalRootComponent,
  children: [
    {
      path: '',
      component: AnimalListComponent
    },
    {
      path: ':id',
      component: AnimalComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
