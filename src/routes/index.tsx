import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Suppliers from '../pages/Suppliers';
import Products from '../pages/Products';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Suppliers} />
    <Route path="/providers" exact component={Suppliers} />
    <Route path="/products" component={Products} />
  </Switch>
);

export default Routes;
