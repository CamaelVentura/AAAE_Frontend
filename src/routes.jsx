import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial/index';
import Busao from './pages/Busao/index';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PaginaInicial}/>
        <Route path="/busao" exact component={Busao}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;