import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  images = [
    { url: '/assets/portadafb2.jpg', description: 'Descripción de la imagen 1' },
    { url: '/assets/carlos.jpg', description: 'Descripción de la imagen 2' },
    // Agrega más imágenes según sea necesario
  ];

//   currentIndex = 0;
//   intervalId: any; // Variable para almacenar el ID del intervalo

//   ngOnInit() {
//     // Llama a la función para cambiar automáticamente cada 5 segundos (5000 ms)
//     this.startAutoPlay();
//   }

//   ngOnDestroy() {
//     // Limpia el intervalo cuando el componente se destruye para evitar fugas de memoria
//     this.stopAutoPlay();
//   }

//   startAutoPlay() {
//     // Inicia el intervalo para cambiar automáticamente las imágenes cada 5 segundos
//     this.intervalId = setInterval(() => {
//       this.next();
//     }, 5000);
//   }

//   stopAutoPlay() {
//     // Detiene el intervalo cuando sea necesario (por ejemplo, cuando el componente se destruye)
//     clearInterval(this.intervalId);
//   }

//   next() {
//     // Cambia a la siguiente imagen
//     this.currentIndex = (this.currentIndex + 1) % this.images.length;
//   }

//   prev() {
//     // Cambia a la imagen anterior
//     this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
//   }


// changeImage(index: number) {
//   console.log('Changing to image at index:', index);
//   this.currentIndex = index;
//   this.stopAutoPlay();
//   this.startAutoPlay();
// }

}
