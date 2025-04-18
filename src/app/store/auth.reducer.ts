import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction, createReducer, on, props } from '@ngrx/store';
import { tap } from 'rxjs';

export interface IAuth {
  isLoggedIn: boolean;
}

// Initial state with interface.

export const initialState: IAuth = { isLoggedIn: false };

interface IActionProp {
  userName: string;
  password: string;
}

// Actions are defined in the single file here...
export const login_action = createAction(
  '[Login Auth] login action',
  props<IActionProp>()
);

export const logout_action = createAction('[Logout Auth] logout action');

// Reducers..

export const authReducer = createReducer(
  initialState,
  on(login_action, (state) => ({
    ...state,
    isLoggedIn: true,
  })),
  on(logout_action, () => ({ isLoggedIn: false }))
);
