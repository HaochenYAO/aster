import * as React from "react";
import YBFooter from './components/footer/YBFooter';
import Divider from '@material-ui/core/Divider';

function withFooter<P>(Component: React.ComponentType<P>) {
  function WithFooter(props: P) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <React.Fragment>
        <Component {...props} />
        <Divider />
        <YBFooter />
      </React.Fragment>
    );
  }

  return WithFooter;
}

export default withFooter;
