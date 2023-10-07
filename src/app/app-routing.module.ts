import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent,
    },
    {
      path: 'conocenos',
      component: TeamComponent
    },
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
