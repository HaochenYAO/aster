import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
// import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withRoot from "../../withRoot";

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
      background: "url(/img/banner.png)"
    },
    icon: {
      marginRight: theme.spacing.unit * 2
    },

    toolbar: {
      alignItems: "center",
      justifyContent: "space-between"
    },
    navbar: {
      color: "white",
      "font-weight": "10px"
    }
  });

interface IState {
  anchorEl: any;
}

class YBNavbar extends React.Component<WithStyles<typeof styles>, IState> {
  public state = {
    anchorEl: null
  };

  public handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public handleClose = () => {
    this.setState({ anchorEl: null });
  };

  public render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <img src="/img/logo.jpg" width="120" />
            <div>
              {/* <ul className={classes.navbar}>
                <li>
                  <a href="#home">首页</a>
                </li>
                <li>
                  <a href="#about">产品</a>
                </li>
                <li>
                  <a href="#services">企业介绍</a>
                </li>
                <li>
                  <a href="#contact">资料下载</a>
                </li>
              </ul> */}
              <IconButton
                aria-owns={open ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(YBNavbar));
