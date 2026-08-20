import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  standalone: false,
  templateUrl: './music.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements AfterViewInit, OnDestroy {
  @ViewChild('demoYouTubePlayer') demoYouTubePlayerRef: ElementRef<HTMLDivElement> | undefined;  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if (this.demoYouTubePlayerRef) {
      // Inicializar demoYouTubePlayer cuando esté disponible
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }
  }

  onResize = (): void => {
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
