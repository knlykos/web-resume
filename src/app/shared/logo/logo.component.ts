import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import anime from 'animejs/lib/anime.es';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit, AfterViewInit {
  @Output() animationEnded = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.logoLanding();
  }

  basicLogoAnimation() {
    const animeRect = anime
      .timeline({
        targets: '#frame',
        strokeDashoffset: [100, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        direction: 'alternate',
        loop: false,
      })
      .add({
        targets: '#frame',
        strokeDasharray: [1000],
        easing: 'easeOutSine',
        direction: 'alternate',
        loop: false,
      });
    const animationText = anime
      .timeline({
        targets: '#name',
        strokeDashoffset: [300, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        direction: 'alternate',
        loop: false,
      })
      .add({
        fill: 'rgba(255,255,255,80%)',
        duration: 1500,
        easing: 'easeInOutSine',
        direction: 'alternate',
        strokeOpacity: '0',
      });
  }

  logoLanding() {
    anime
      .timeline({
        targets: '#frame',
        strokeDashoffset: [100, 0],
        easing: 'easeOutSine',
        duration: 3000,
        direction: 'alternate',
        loop: false,
      })
      .add({
        targets: '#frame',
        strokeDasharray: [1000],
        easing: 'easeOutSine',
        duration: 5000,
        direction: 'alternate',
        loop: false,
      });
    const animation = anime
      .timeline({
        targets: '#name',
        strokeDashoffset: [300, 0],
        easing: 'cubicBezier(0.4,0.0,1,1)',
        duration: 1500,
        direction: 'alternate',
        loop: false,
      })
      .add({
        fill: 'rgba(255,255,255,80%)',
        duration: 1000,
        easing: 'cubicBezier(0.4,0.0,1,1)',
        direction: 'alternate',
        strokeOpacity: '0',
      })
      .add({
        targets: '#name',
        easing: 'cubicBezier(0.0,0.0,0.2,1)',
        duration: 1000,
      })
      .add({
        targets: '#frame, #name',
        easing: 'cubicBezier(0.0,0.0,0.2,1)',
        duration: 1000,
        opacity: 0,
      });
    animation.finished.then((res) => {
      this.animationEnded.emit(true);
    });
  }
}
