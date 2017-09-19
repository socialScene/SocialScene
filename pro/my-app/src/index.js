import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import Home from './components/Home';
import Users from './components/users';
import LogIn from './components/LogIn';
import viewProfile from './components/viewProfile';
import Post from './components/Post';
import Profile from './components/Profile';
import {Router,Route,IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store,{history} from './store'; 
import {requireAuthentication} from './components/authenticate';

 
//import registerServiceWorker from './registerServiceWorker';

const router=(
    <Provider store={store}>
        <Router history={history} >
            <Route path="/" component={App}>
                <IndexRoute exact component={Home}></IndexRoute>
                <Route path='/users' component={Users}></Route>
                <Route path='/LogIn' component={LogIn}></Route>
                <Route path='/Post' component={requireAuthentication(Post)}></Route>
                <Route path='/Profile' component={Profile}></Route>
                <Route path='/viewProfile' component={viewProfile}></Route>
            </Route>
        </Router>
    </Provider>
)
app.authenticate().then((user)=>{
    store.dispatch(authGood(user));
    ReactDOM.render(router, document.getElementById('root')
    );
}