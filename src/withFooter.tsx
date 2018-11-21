import * as React from "react";
import YBFooter from './components/footer/YBFooter';

function withFooter<P>(Component: React.ComponentType<P>) {
  function WithFooter(props: P) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <React.Fragment>
        <Component {...props} />
        <YBFooter />
      </React.Fragment>
    );
  }

  return WithFooter;
}

export default withFooter;
