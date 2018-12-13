import * as React from "react";
import YBNavbar from "src/client/components/navbar/YBNavbar";

function withNavbar<P>(Component: React.ComponentType<P>) {
  function WithNavbar(props: P) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <React.Fragment>
        <YBNavbar />
        <Component {...props} />
      </React.Fragment>
    );
  }

  return WithNavbar;
}

export default withNavbar;
