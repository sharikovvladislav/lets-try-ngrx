import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MyComponentActions } from './myComponent.actions';
import { StoreWithMyComponent, myComponentStoreFactory } from './myComponent.reducer';

@Component({
  selector: 'my-component',
  templateUrl: './myComponent.component.html',
  providers: [{ provide: StoreWithMyComponent, useFactory: myComponentStoreFactory, deps: [Store] }]
})

export class MyComponent {
  counter: Observable<number>;

  constructor(
    private myComponentActions: MyComponentActions,
    private store: StoreWithMyComponent
  ) {
    this.counter = store.select(s => s.lazy.counter);
  }

  decrement() {
    this.store.dispatch(this.myComponentActions.decrement());
  }

  increment() {
    this.store.dispatch(this.myComponentActions.increment());
  }

  reset() {
    this.store.dispatch(this.myComponentActions.reset());
  }
}
