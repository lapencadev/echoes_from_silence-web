import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AppComponent } from './app.component';
import { MusicComponent } from './pages/music/music.component';

const routes: Routes = [

    {
      path: 'conocenos',
      component: TeamComponent
    },
  {
    path: 'musica',
    component: MusicComponent
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
