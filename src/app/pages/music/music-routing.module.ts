import { Routes } from "@angular/router";
import { MusicComponent } from "./music.component";
import { LyricsComponent } from "./lyrics/lyrics.component";

const routes: Routes = [
    {
      path: '',
      data: {
        breadcrumb: {
          label: 'musica',
        },
      },
      component: MusicComponent,  // Add this line if MusicComponent should have its own route
      children: [
        {
          path: 'letras',
          component: LyricsComponent,
        },
      ],
    },
  ];
  