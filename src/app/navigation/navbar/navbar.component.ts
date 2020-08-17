import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarState: number = 0;
  constructor() {}

  ngOnInit(): void {}

  // closeNavbar() {
  //   this.navbarState = 0;
  //   setTimeout(() => {
  //     anime({
  //       targets: '#center',
  //       translateX: 10,
  //     });
  //   }, 200);
  // }

  toggleNavbar() {
    // Open
    if (this.navbarState === 0) {
      anime({
        targets: '#navbar',
        translateX: '0%',
        duration: 200,
        easing: 'cubicBezier(0.4, 0.0, 0.2, 1)',
      });
      // SVG
      anime({
        targets: 'svg #center',
        width: '1px',

      });
      anime({
        targets: 'svg #top',
        rotate: '45deg',
        duration: 5000,
        translateY: -3,
        translateX: 3,
      });
      this.navbarState = 1;
    } else {
      anime({
        targets: '#navbar',
        translateX: '100%',
        duration: 200,
        easing: 'cubicBezier(0.4, 0.0, 0.2, 1)',
      });
      anime({
        targets: '#center',
        translateX: 10,
        duration: 500,
      });
      anime({
        targets: 'svg #top',
        rotate: '45deg',
        duration: 5000,
        translateY: -3,
        translateX: 3,
      });
      this.navbarState = 0;
    }
  }

  ngAfterViewInit(): void {
    anime({
      targets: '#navbar',
      translateX: '100%',
      duration: 200,
    });

    this.navbarState = 0;
    setTimeout(() => {
      anime({
        targets: '#center',
        translateX: 10,
        duration: 200,
      });
    }, 200);
  }
}
