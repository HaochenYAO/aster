import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import YBTabs from "src/components/tabs/YBTabs";

import withRoot from "src/withRoot";
import withNavbar from 'src/withNavbar';
import withFooter from 'src/withFooter';
import crystal from "src/data/crystal";
import pile from "src/data/pile";

const YBProductList = React.lazy(() =>
  import("src/components/list/YBProductList")
);

const styles = (theme: Theme) =>
  createStyles({
    listImg: {
      width: 60
    }
  });

class Product extends React.Component<WithStyles<typeof styles>> {
  private productsCrystal = crystal;
  private productsPile = pile;

  public render() {
    return (
      <React.Fragment>
        <YBTabs>
          <React.Suspense fallback={<div>Loading...</div>}>
            <YBProductList products={this.productsCrystal} />
          </React.Suspense>
          <React.Suspense fallback={<div>Loading...</div>}>
            <YBProductList products={this.productsPile} />
          </React.Suspense>
        </YBTabs>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(withFooter(withNavbar(Product))));
