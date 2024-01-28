import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { MusicComponent } from './pages/music/music.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LyricsComponent } from './pages/music/lyrics/lyrics.component';
import { ConcertsComponent } from './pages/concerts/concerts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MerchandisingComponent } from './pages/merchandising/merchandising.component';

const routes: Routes = [
  {
    path: 'merchandising',
    component: MerchandisingComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'conciertos',
    component: ConcertsComponent
  },
  {
    path: 'conocenos',
    component: TeamComponent
  },
  {
    path: 'musica',
    data: {
      breadcrumb: {
        label: 'Nuestra música',
      },
    },
    children: [
      {
        path: '',
        component: MusicComponent,
      },
      {
        path: 'letras',
        component: LyricsComponent,
      },
    ],
  },
  {
    path: '',
    component: LandingComponent
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
