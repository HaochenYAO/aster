import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import YBNavbar from "../../components/navbar/YBNavbar";
import YBFooter from "../../components/footer/YBFooter";
import withRoot from "../../withRoot";

const styles = (theme: Theme) =>
  createStyles({
    listImg: {
      width: 60
    }
  });

class Product extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <YBNavbar />
        <div className="List">
          <List component="nav">
            <ListItem button={true}>
              <img className={classes.listImg} src="/img/lcd.jpg" />
              <ListItemText inset={true} primary="液晶" secondary="喻柏液晶"/>
            </ListItem>
            <Divider />
            <ListItem button={true}>
              <img className={classes.listImg} src="/img/pile.jpg" />
              <ListItemText inset={true} primary="电池" secondary="喻柏电池"/>
            </ListItem>
          </List>
        </div>
        <YBFooter />
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Product));
