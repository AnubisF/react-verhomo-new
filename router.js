import React from 'react';
import { Switch, Route } from 'react-router';

export default (
    <Switch>
        <Route path='/etusivu' />
        <Route path='/katariina' />
        <Route path='/palvelut' />
        <Route path='/tarjouspyntö' />
        <Route path='/portfolio' />
        <Route path='/kauppa' />
        <Route path='/yhteystiedot' />
        <Route path='/' />
    </Switch>
)