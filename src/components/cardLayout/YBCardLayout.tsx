import * as React from "react";
import * as classNames from 'classnames';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import { MCard} from '../../models/MCard';
import YBCard from '../card/YBCard';


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

interface IState {
  open: boolean;
}

interface IProps extends WithStyles<typeof styles> {
  cards: MCard[];
}

class YBCardLayout extends React.Component<IProps, IState> {
  public state = {
    open: false
  };

  public render() {
    const { classes, cards } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container={true} spacing={40}>
            {cards.map(card => (
              <Grid item={true} key={card.id} sm={6} md={4} lg={3}>
                <YBCard card={card} />
              </Grid>
            ))}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(YBCardLayout);
