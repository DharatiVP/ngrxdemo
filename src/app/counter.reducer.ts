import { createReducer, on } from "@ngrx/store";
import * as counterAction from './counter.actions';

export const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(counterAction.increment,(state) => state + 1),
    on(counterAction.decrement,(state) => state - 1),
    on(counterAction.reset, (state) => 0)
);