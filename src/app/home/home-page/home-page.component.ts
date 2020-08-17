import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import anime from 'animejs/lib/anime.es';
import { SVG } from '@svgdotjs/svg.js';
import gspa from 'gsap';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('body', { static: true }) private body: ElementRef<Body>;
  bodyScroll: number;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // gspa.to('#name', { duration: 5, x: 200 });
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

    animationText.finished.then((res) => {
      console.log(res);
    });
    // animationText.finished.then((res) => {
    //   anime({
    //     targets: '#frame',
    //     strokeDashoffset: [300, 1000],
    //     strokeDasharray: [0],
    //     easing: 'easeOutSine',
    //     duration: 1500,
    //     direction: 'alternate',
    //     loop: false,
    //   });
    // });
  }

  async getInTouch() {
    // document.body.style.top = `-{$}`
    // console.log(this.body);
    // this.renderer.setStyle(this.body.nativeElement, 'position', 'fixed');
    this.bodyScroll = window.scrollY;
    const getInTouchAnime = anime({
      targets: '.getintouch--screen',
      top: 0,
      duration: 250,
      translateY: '0%',
      easing: 'cubicBezier(0.4, 0.0, 0.2, 1)',
    });
    await getInTouchAnime.finished;
    document.body.style.position = 'fixed';
  }

  closeGetInTouch() {
    document.body.style.position = 'unset';
    setTimeout(() => {
      document.body.scrollTo(100, 100);
    }, 600);
    anime({
      targets: '.getintouch--screen',
      top: 0,
      duration: 250,
      translateY: '100%',
      easing: 'cubicBezier(0.4, 0.0, 0.2, 1)',
    });
  }

  async openMoreWorkExp() {
    const getInTouchAnime = anime({
      targets: '.getintouch--screen',
      top: 0,
      duration: 250,
      translateY: '0%',
      easing: 'cubicBezier(0.4, 0.0, 0.2, 1)',
    });
    await getInTouchAnime.finished;
  }
}
