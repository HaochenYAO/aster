import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";

const styles = (theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.background.paper,
      "padding-left": theme.spacing.unit * 6,
      "padding-top": theme.spacing.unit * 2,
      "padding-bottom": theme.spacing.unit * 2
    },
    footer_icon: {
      width: 18
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
            <FontAwesomeIcon size="1x" fixedWidth={true} icon={faPhone} />
            <span> - 13901840320</span>
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            color="textSecondary"
            component="p"
          >
            <FontAwesomeIcon size="1x" fixedWidth={true} icon={faMailBulk} />
            <span> - yubaidz@163.com</span>
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            color="textSecondary"
            component="p"
          >
            <FontAwesomeIcon size="1x" fixedWidth={true} icon={faBuilding} />
            <span> - 上海宝山区共和新路4965号4号楼1309室</span>
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            color="textSecondary"
            component="p"
          >
            <FontAwesomeIcon size="1x" fixedWidth={true} icon={faClipboardCheck} />
            <span> - 沪ICP备18046626号-1</span>
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(YBNavbar);
