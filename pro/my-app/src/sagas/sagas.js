import {takeEvery} from 'redux-saga';
import {fork,call,put} from 'redux-saga/effects';
import {users,Post,getRecentPosts} from '../services/api';
import {browserHistory} from 'react-router';

function * fetchRecentPosts(feathersApp){
    const posts = yield call(getRecentPosts,feathersApp);
    yield put({type: "RECENT_POST_SUCCEEDED",posts});
}

function * addPostSaga(feathersApp){
    yield * takeEvery("ADD_POST_REQUESTED",Post,feathersApp);
}

function * recentPostSaga(feathersApp){
    yield * takeEvery("RECENT_POST_REQUESTED",fetchRecentPosts,feathersApp);
}

function * profileSaga(feathersApp,action){

}

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
    yield browserHistory.push(action.next);
}

function * loginSaga(feathersApp){
    yield * takeEvery("LOGIN_REQUESTED",tryLogin,feathersApp);
}

export default function* root(feathersApp){
    yield[
        fork(recentPostSaga,feathersApp),
        fork(fetchRecentPosts,feathersApp),
        fork(addPostSaga,feathersApp),
        //fork(loginSaga,feathersApp),
        fork(signupSaga,feathersApp)
    ]
}
