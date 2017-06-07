/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Action } from '@ngrx/store';

@Injectable()

export class MyComponentActions {

  static DECREMENT = '[MyComponent] Decrement';
  decrement(): Action {
    return {
      type: MyComponentActions.DECREMENT
    };
  }

  static INCREMENT = '[MyComponent] Increment';
  increment(): Action {
    return {
      type: MyComponentActions.INCREMENT
    };
  }

  static RESET = '[Lazy] Reset';
  reset(): Action {
    return {
      type: MyComponentActions.RESET
    };
  }
}
