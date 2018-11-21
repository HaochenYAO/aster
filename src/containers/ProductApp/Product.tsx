import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import YBNavbar from "src/components/navbar/YBNavbar";
import YBFooter from "src/components/footer/YBFooter";
import withRoot from "src/withRoot";
import YBTabs from "src/components/tabs/YBTabs";
import YBProductList from "src/components/list/YBProductList";
import crystal from "src/data/crystal";

const styles = (theme: Theme) =>
  createStyles({
    listImg: {
      width: 60
    }
  });

class Product extends React.Component<WithStyles<typeof styles>> {
  private productsCrystal = crystal;

  public render() {
    return (
      <React.Fragment>
        <YBNavbar />
        <YBTabs>
          <YBProductList products={this.productsCrystal}/>
          <YBProductList products={[]}/>
        </YBTabs>
        <YBFooter />
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Product));
