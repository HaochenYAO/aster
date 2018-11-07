import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/icons/List";
// import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withRoot from "../../withRoot";
import "./YBNavbar.css";

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
    menuButton: {
      color: "white",
      "font-weight": 600,
      "font-size": "15px"
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
            <IconButton
              aria-owns={open ? "menu-appbar" : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
              className="menuIcon"
            >
              <List />
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
              <MenuItem onClick={this.handleClose}>首页</MenuItem>
              <MenuItem onClick={this.handleClose}>产品</MenuItem>
              <MenuItem onClick={this.handleClose}>企业介绍</MenuItem>
              <MenuItem onClick={this.handleClose}>资料下载</MenuItem>
            </Menu>

            <div className="menuItem">
              <Button className={classes.menuButton}>首页</Button>
              <Button className={classes.menuButton}>产品</Button>
              <Button className={classes.menuButton}>企业介绍</Button>
              <Button className={classes.menuButton}>资料下载</Button>
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(YBNavbar));
