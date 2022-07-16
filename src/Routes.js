import React from 'react';

import Login from './components/Login';
import Grupo from './components/Grupo';
import Assunto from './components/Assunto';

import { Route, BrowserRouter, Link } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={ Login } path='/login' />
            <Route component={ Grupo } path='/grupo' />
            <Route component={ Assunto } path='/assunto' />
        </BrowserRouter>
    );
}

export default Routes;