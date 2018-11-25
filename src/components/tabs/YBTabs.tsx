import * as React from "react";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
});

interface IState {
  tab: number;
}

interface IProps extends WithStyles<typeof styles> {
  name: string;
  history: any;
  location: any;
  match: any;
}

class YBTabs extends React.Component<IProps, IState> {
  public state = {
    tab: 0
  };

  private product = {
    crystal: {
      index: 0,
      name: '液晶',
    },
    pile: {
      index: 1,
      name: '电池',
    },
  };

  public componentWillMount() {
    const { name } = this.props;
    const productIndex = this.product[name].index;
    this.setState({ tab: productIndex });
  }

  public render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.tab}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth={true}
          >
            <Tab label="液晶" />
            <Tab label="电池" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis="x"
          index={this.state.tab}
          onChangeIndex={this.handleChangeIndex}
          animateHeight={true}
        >
          { children }
        </SwipeableViews>
      </div>
    );
  }

  private handleChange = (event: any, value: number) => {
    const { history } = this.props;
    history.push(`/product/list/${this.getProductNameByIndex(value)}`);
    this.setState({ tab: value });
  };

  private handleChangeIndex = (index: number) => {
    const { history } = this.props;
    history.push(`/product/list/${this.getProductNameByIndex(index)}`);
    this.setState({ tab: index });
  };

  private getProductNameByIndex(index: number) {
    let k = '';
    Object.keys(this.product).map(key => {
      if (this.product[key].index === index) {
        k = key;
      }
    });
    return k;
  }
}

export default withStyles(styles, { withTheme: true })(withRouter<IProps>(YBTabs));
