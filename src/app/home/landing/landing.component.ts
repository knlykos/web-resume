import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import {
  AnimationCurves,
  AnimationDurations,
} from './../../shared/animations/animation';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('state', [
      state('void, hidden', style({ display: 'none' })),
      state('showing', style({ display: 'flex', opacity: 0 })),
      state('visible', style({ display: 'flex' })),
      transition('visible => void, visible => hidden', [
        animate(
          `0s ${AnimationCurves.ACCELERATION_CURVE}`,
          style({ opacity: 100 })
        ),
        animate(
          `${AnimationDurations.ENTERING} ${AnimationCurves.ACCELERATION_CURVE}`,
          style({ opacity: 0 })
        ),
      ]),
      transition('hidden => showing', [
        animate(
          `0s ${AnimationCurves.ACCELERATION_CURVE}`,
          style({
            display: 'flex',
          })
        ),
      ]),
      transition('showing => visible', [
        animate(
          `0s ${AnimationCurves.ACCELERATION_CURVE}`,
          style({
            transform: 'translateY(100%)',
          })
        ),
        animate(
          `${AnimationDurations.ENTERING} ${AnimationCurves.ACCELERATION_CURVE}`,
          style({ transform: 'translateY(0%)' })
        ),
      ]),
    ]),
  ],
  host: {
    class: 'landing-page',
    '[@state]': '_animationState',
    '(@state.start)': '_onAnimationStart($event)',
    '(@state.done)': '_onAnimationDone($event)',
  },
})
export class LandingComponent implements OnInit {
  _animationState: 'void' | 'visible' | 'showing' | 'hidden' = 'visible';

  constructor() {}

  ngOnInit(): void {}

  animationLogoDone($event: boolean) {
    // setTimeout(() => {
    //   this._animationState = 'showing';
    // }, 0);
    // setTimeout(() => {
    //   this._animationState = 'visible';
    // }, 0);
    setTimeout(() => {
      this._animationState = 'hidden';
    }, 10);
  }

  _onAnimationStart(event: AnimationEvent) {
    // this._animationStateChanged.emit(event);
  }

  _onAnimationDone(event: any) {
    if (event.toState === 'hidden') {
      // this._restoreFocus();
    } else if (event.toState === 'visible') {
      // this._trapFocus();
    }

    // this._animationStateChanged.emit(event);
  }
}
