import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withRoot from "../withRoot";

const styles = (theme: Theme) =>
  createStyles({
    heroUnit: {
      backgroundColor: theme.palette.background.paper
    },
    heroContent: {
      maxWidth: 600,
      margin: "0 auto",
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
  });

interface IState {
  open: boolean;
}

class YBHero extends React.Component<WithStyles<typeof styles>, IState> {
  public state = {
    open: false
  };

  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom={true}
              >
                喻柏电子科技有限公司
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                paragraph={true}
              >
                以质量求生存
                以技术求效益
                以管理求效益
                以服务求市场
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container={true} spacing={16} justify="center">
                  <Grid item={true}>
                    <Button variant="contained" color="primary">
                      产品目录
                    </Button>
                  </Grid>
                  <Grid item={true}>
                    <Button variant="outlined" color="primary">
                      联系我们
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        {/* End footer */}
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(YBHero));
