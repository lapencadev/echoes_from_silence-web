import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Textos } from 'src/app/constantes/textos.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly constantes = Textos;

}
