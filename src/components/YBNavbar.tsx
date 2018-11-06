import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withRoot from "../withRoot";

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
      background: 'url(/img/banner.png)',
    },
    icon: {
      marginRight: theme.spacing.unit * 2
    },
  });


interface IState {
  open: boolean;
}

class YBNavbar extends React.Component<WithStyles<typeof styles>, IState> {
  public state = {
    open: false
  };

  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <img src="/img/logo.jpg" width="120"/>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(YBNavbar));
