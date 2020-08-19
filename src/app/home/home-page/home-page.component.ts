import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import anime from 'animejs/lib/anime.es';

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
