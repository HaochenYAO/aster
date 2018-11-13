import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import withRoot from "../../withRoot";

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
                variant="subtitle2"
                align="left"
                color="textPrimary"
                paragraph={true}
              >
                上海喻柏电子科技有限公司成立于2005年5月，是一家集技术研发、生产、销售液晶显示屏LCD和液晶显示模组、触摸LCD屏（包括TN、HTN、STN、FSTN、BTN、VA等）以及LED背光源的高新技术公司。
                公司产品广泛应用于厨卫家电、车辆仪表盘、车载仪表盘、工控机、电力系统等各个行业，具有对比度高、视角宽、响应速度快、功耗低等特点，并与国内多家上市龙头企业建立了长期稳定的合作关系。
                公司产品有雄厚的技术支撑，拥有一批在液晶领域工作多年，曾经任职于液晶行业知名企业的研发、设计人才，为客户提供专业的产品设计及可靠的产品质量保证。
                公司通过了IS016949质量管理体系，拥有SGS检测报告，符合ROHS环保标准，通过欧盟法规的REACH认证。
                我们力求最好的品质，稳定的交货期，优良的服务为客户提供更具创造活力的优质产品。我们真诚欢迎您对我们公司提出更高的要求。
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
