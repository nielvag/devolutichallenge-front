import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Supplier from '../pages/Supplier';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Supplier} />
    <Route path="/products" component={Product} />
  </Switch>
);

export default Routes;
