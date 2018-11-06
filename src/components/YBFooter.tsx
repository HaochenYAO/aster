import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withRoot from "../withRoot";

const styles = (theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.background.paper,
      'padding-left': theme.spacing.unit * 6,
      'padding-top': theme.spacing.unit * 2,
      'padding-bottom': theme.spacing.unit * 2,
    }
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
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="subtitle1" align="left" gutterBottom={true}>
            喻柏科技
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            color="textSecondary"
            component="p"
          >
            电话: 13901840320
            邮箱: xxx@yyy.com
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(YBNavbar));
