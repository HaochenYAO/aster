import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Welcome from 'src/client/containers/WelcomeApp/Welcome';
import Product from 'src/client/containers/ProductApp/ListApp/Product';
import ProductDetail from 'src/client/containers/ProductApp/DetailApp/ProductDetail';
import Test from 'src/client/containers/TestApp/Test';

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
    path: '/product/list/:name',
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
  {
    path: '/test',
    component: Test,
    exact: true,
    pageName: 'Test',
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
