import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import YBTabs from "src/components/tabs/YBTabs";
import YBProductList from "src/components/list/YBProductList";

import withRoot from "src/withRoot";
import withNavbar from "src/withNavbar";
import withFooter from "src/withFooter";
import crystal from "src/data/crystal";
import pile from "src/data/pile";

const styles = (theme: Theme) =>
  createStyles({
    listImg: {
      width: 60
    }
  });

interface IProps extends WithStyles<typeof styles> {
  match: { params: { name: string } };
}

class Product extends React.Component<IProps> {
  private productsCrystal = crystal;
  private productsPile = pile;

  public render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <YBTabs name={ match.params.name }>
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
