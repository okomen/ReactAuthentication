import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';

ReactStormpath.init();
ReactDOM.render(
<Router history={createHashHistory({ queryKey: false })}>
    <Route path='/' component={MasterPage}>
        <IndexRoute component={IndexPage} />
        <LoginRoute path='/login' component={LoginPage} />
        <Route path='/register' component={RegistrationPage} />
        <AuthenticatedRoute path='/profile' component={ProfilePage} />
        <LogoutRoute path='/logout' />
    </Route>
</Router>,
    document.getElementById('app-container')
);