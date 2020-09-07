import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  Input,
  AfterViewChecked,
} from '@angular/core';
import anime from 'animejs/lib/anime.es';
import { state, trigger, style } from '@angular/animations';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit, AfterViewInit {
  @Input() mode: 'landing' | 'logo' = 'logo';

  @Output() animationEnded = new EventEmitter<boolean>();
  _animationState: 'void' | 'visible' | 'showing' | 'hidden' = 'visible';
  svgWidth: number = 100;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.mode === 'landing') {
      this.landingInit();
    } else {
      this.logoInit();
      // this.logoAnimation();
    }
  }

  mainFrameClass() {
    if (this.mode === 'landing') {
      return 'frame-landing';
    } else {
      return 'frame-logo';
    }
  }

  mainNameClass() {
    if (this.mode === 'landing') {
      return 'name-landing';
    } else {
      return 'name-logo';
    }
  }

  landingInit() {
    this.svgWidth = 200;
    this.logoLanding();
  }

  logoInit() {
    this.svgWidth = 100;
  }

  logoAnimation() {
    anime
      .timeline({
        targets: '.frame-logo',
        strokeDashoffset: [100, 0],
        easing: 'easeOutSine',
        duration: 3000,
        direction: 'alternate',
        loop: false,
      })
      .add({
        targets: '.frame-logo',
        strokeDasharray: [1000],
        easing: 'easeOutSine',
        duration: 5000,
        direction: 'alternate',
        loop: false,
      });
    const animation = anime
      .timeline({
        targets: '.name-logo',
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
      });

    animation.finished.then((res) => {
      this.animationEnded.emit(true);
    });
  }

  logoLanding() {
    anime
      .timeline({
        targets: '.frame-landing',
        strokeDashoffset: [100, 0],
        easing: 'easeOutSine',
        duration: 3000,
        direction: 'alternate',
        loop: false,
      })
      .add({
        targets: '.frame-landing',
        strokeDasharray: [1000],
        easing: 'easeOutSine',
        duration: 5000,
        direction: 'alternate',
        loop: false,
      });
    const animation = anime
      .timeline({
        targets: '.name-landing',
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
        targets: '.name-landing',
        easing: 'cubicBezier(0.0,0.0,0.2,1)',
        duration: 1000,
      })
      .add({
        targets: '.frame-landing, .name-landing',
        easing: 'cubicBezier(0.0,0.0,0.2,1)',
        duration: 1000,
        opacity: 0,
      });
    animation.finished.then((res) => {
      console.log('terminó');
      this.animationEnded.emit(true);
    });
  }
}
