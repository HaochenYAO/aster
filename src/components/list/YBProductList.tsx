import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import withRoot from "../../withRoot";

const styles = (theme: Theme) =>
  createStyles({
    listImg: {
      width: 60
    }
  });

interface IProps extends WithStyles<typeof styles> {
  products: Array<{
    id: number;
    img: string;
    name: string;
    detail: string;
  }>;
}

class YBProductList extends React.Component<IProps> {
  public render() {
    const { classes, products } = this.props;

    return (
      <React.Fragment>
        <div className="List">
          <List component="nav">
            {products.map(product => [
              <ListItem key={`item_${product.id}`} button={true}>
                <img className={classes.listImg} src={product.img} />
                <ListItemText
                  inset={true}
                  primary={product.name}
                  secondary={product.detail}
                />
              </ListItem>,
              <Divider key={`divider_${product.id}`} />
            ])}
          </List>
        </div>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(YBProductList));
