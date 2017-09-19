import {createAction } from 'redux-action';

export const SIGNUP_REQUESTED ='SIGNUP_REQUEST';
export const LOGIN_REQUESTED = 'LOGIN_REQUEST';

export const users = createAction(SIGNUP_REQUESTED);
export const login = createAction(LOGIN_REQUESTED);

