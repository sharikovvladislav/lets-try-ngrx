import { Store, ActionReducer, Action } from '@ngrx/store';

import { AppState, createNewRootReducer } from './../../reducers/index';

import { MyComponentActions } from './myComponent.actions';

export interface MyComponentState {
    counter: number;
}

const initialState: MyComponentState = {
    counter: 0
};

export function lazyReducer(state: MyComponentState = initialState, action: Action) {
    switch (action.type) {

        case MyComponentActions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };

        case MyComponentActions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };

        case MyComponentActions.RESET:
            return {
                ...state,
                counter: 0
            };

        default:
            return state;
    }
}

export interface AppStateWithLazy extends AppState {
    lazy: MyComponentState;
}

export class StoreWithMyComponent extends Store<AppStateWithLazy> { }

export function myComponentStoreFactory(appStore: Store<AppState>) {
    appStore.replaceReducer(createNewRootReducer({ lazy: lazyReducer }));
    return appStore;
}
