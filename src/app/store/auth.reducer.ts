import { createAction, createReducer, on, props } from '@ngrx/store';

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
