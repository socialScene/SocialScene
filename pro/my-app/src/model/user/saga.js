import {takeEvery} from 'redux-saga';
import {fork,call,put} from 'redux-saga/effects';
import {users,login} from './api';
import {browserHistory} from 'react-router';

import{
    LOGIN_REQUESTED,SIGNUP_REQUESTED
} from './actions';  





function * trySignup(feathersApp,action){
    const succ = yield call(users,feathersApp,action.fullName,action.username,action.password);
    console.log(succ);
    yield browserHistory.push('LogIn');
}

function * signupSaga(feathersApp){
    yield * takeEvery("SIGNUP_REQUESTED",trySignup,feathersApp)
}

function * tryLogin(feathersApp,action){
    const user =yield call(login,feathersApp,action.username,action.password);
    console.log(user)
    yield put({type:"LOGIN_DONE",user});
    yield browserHistory.push('');
}

function * loginSaga(feathersApp){
    yield * takeEvery("LOGIN_REQUESTED",tryLogin,feathersApp);
}

