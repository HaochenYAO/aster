import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import withRoot from "src/withRoot";
import withNavbar from 'src/withNavbar';
import withFooter from 'src/withFooter';

import crystal from "src/data/crystal";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit * 2,
    },
    image: {
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    },
    title: {
      fontSize: theme.typography.fontSize * 2
    }
  });


interface IProps extends WithStyles<typeof styles> {
  match: { params: { id: string }};
}


class ProductDetail extends React.Component<IProps> {
  public render() {
    const { classes, match } = this.props;
    const productInfo: {id: number, name: string, detail: string, img: string} = this.getProductDetail(match.params.id);

    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Grid container={true} spacing={24}>
            <Grid item={true} xs={12} md={6} sm={12}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={productInfo.img}
                />
              </ButtonBase>
            </Grid>
            <Grid item={true} xs={6} md={6} sm={12} container={true}>
              <Grid item={true} container={true} direction="column" spacing={16}>
                <Grid item={true} xs={true}>
                  <Typography className={classes.title} gutterBottom={true} variant="subtitle1">
                    {productInfo.name}
                  </Typography>
                  <Typography gutterBottom={true}>
                    {productInfo.detail}
                  </Typography>
                  <Typography color="textSecondary">型号: zzzzzzz</Typography>
                  <Typography>
                    介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                  </Typography>
                </Grid>
                <Grid item={true}>
                  <Typography color="textPrimary">价格: xxxx.yy</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }

  private getProductDetail (id: string): {id: number, name: string, detail: string, img: string} {
    for (const product of crystal) {
      if (product.id.toString() === id) {
        return product;
      }
    }
    return {
      id: -1,
      name: '',
      detail: '',
      img: ''
    };
  }
}

export default withRoot(withStyles(styles)(withFooter(withNavbar(ProductDetail))));
