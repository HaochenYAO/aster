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

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing.unit * 2,
    },
    image: {
      width: 548,
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

class ProductDetail extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Grid container={true} spacing={16}>
            <Grid item={true}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="/img/product/WechatIMG1.jpeg"
                />
              </ButtonBase>
            </Grid>
            <Grid item={true} xs={12} sm={true} container={true}>
              <Grid item={true} xs={true} container={true} direction="column" spacing={16}>
                <Grid item={true} xs={true}>
                  <Typography className={classes.title} gutterBottom={true} variant="subtitle1">
                    家用健身器显示屏
                  </Typography>
                  <Typography gutterBottom={true}>
                    VA 负显, 二色彩显
                  </Typography>
                  <Typography color="textSecondary">型号: zzzzzzz</Typography>
                  <Typography>
                    家用健身器显示屏: 介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
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
}

export default withRoot(withStyles(styles)(withFooter(withNavbar(ProductDetail))));
