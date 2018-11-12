import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Welcome from '../containers/WelcomeApp/Welcome';
import Product from '../containers/ProductApp/Product';

export const routes = [
  {
    path: '/',
    component: Welcome,
    exact: true,
    pageName: 'WelcomeApp',
  },
  {
    path: '/welcome',
    component: Welcome,
    exact: true,
    pageName: 'WelcomeApp',
  },
  {
    path: '/product',
    component: Product,
    exact: true,
    pageName: 'ProductApp',
  },
];
const Routes = () => (
  <Switch>
    {
      routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))
    }
  </Switch>
);
export default Routes;
