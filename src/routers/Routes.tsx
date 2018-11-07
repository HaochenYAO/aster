import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Welcome from '../containers/WelcomeApp/Welcome';

export const routes = [
  {
    path: '/',
    component: Welcome,
    exact: true,
    pageName: 'WelcomeApp',
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
