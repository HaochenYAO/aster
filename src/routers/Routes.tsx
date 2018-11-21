import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Welcome from 'src/containers/WelcomeApp/Welcome';
import Product from 'src/containers/ProductApp/ListApp/Product';
import ProductDetail from 'src/containers/ProductApp/DetailApp/ProductDetail';

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
    path: '/product/list',
    component: Product,
    exact: true,
    pageName: 'ProductApp',
  },
  {
    path: '/product/detail/:id',
    component: ProductDetail,
    exact: true,
    pageName: 'ProductDetailApp',
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
