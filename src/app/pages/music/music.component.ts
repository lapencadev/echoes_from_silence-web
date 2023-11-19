import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements AfterViewInit, OnDestroy {
  @ViewChild('demoYouTubePlayer') demoYouTubePlayerRef: ElementRef<HTMLDivElement> | undefined;  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // Verificar que demoYouTubePlayerRef esté definido
    if (this.demoYouTubePlayerRef) {
      // Inicializar demoYouTubePlayer cuando esté disponible
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }
  }

  onResize = (): void => {
    // Verificar que demoYouTubePlayerRef y demoYouTubePlayer estén definidos
    if (this.demoYouTubePlayerRef && this.demoYouTubePlayerRef.nativeElement) {
      // Automatically expand the video to fit the page up to 1200px x 720px
      this.videoWidth = Math.min(this.demoYouTubePlayerRef.nativeElement.clientWidth, 550);
      this.videoHeight = this.videoWidth * 0.6;
      this._changeDetectorRef.detectChanges();
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
}
