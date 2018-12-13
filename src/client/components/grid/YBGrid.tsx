import * as React from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withRoot from "../../withRoot";

const styles = (theme: Theme) =>
  createStyles({
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
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`
    },
  });

const cards = [1, 2, 3];

interface IState {
  open: boolean;
}

class YBGrid extends React.Component<WithStyles<typeof styles>, IState> {
  public state = {
    open: false
  };

  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container={true} spacing={40}>
            {cards.map(card => (
              <Grid item={true} key={card} sm={6} md={4} lg={3} />
            ))}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(YBGrid));
