import * as React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withRoot from "../../withRoot";
import { MCard } from "src/models/MCard";

const styles = (theme: Theme) =>
  createStyles({
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      flexGrow: 1
    }
  });

interface IState {
  open: boolean;
}

interface IProps extends WithStyles<typeof styles> {
  card: MCard;
}

class YBCard extends React.Component<IProps, IState> {
  public state = {
    open: false
  };

  public render() {
    const { classes, card } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={card.img}
            title={card.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom={true} variant="h5" component="h2">
              {card.heading}
            </Typography>
            <Typography>{card.content}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              {card.button1.script}
            </Button>
            <Button size="small" color="primary">
              {card.button2.script}
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(YBCard));
