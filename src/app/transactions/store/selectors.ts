import { State } from './reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getState = createFeatureSelector<State>('myReducer');
export const getLoading = createSelector(getState, state => state.loading);
export const getTransactions = createSelector(getState, state => state.transactions);