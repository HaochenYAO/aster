import * as React from "react";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
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

class YBTabs extends React.Component<WithStyles<typeof styles>, IState> {
  public state = {
    tab: 0
  };

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
        >
          { children }
        </SwipeableViews>
      </div>
    );
  }

  private handleChange = (event: any, value: number) => {
    this.setState({ tab: value });
  };

  private handleChangeIndex = (index: number) => {
    this.setState({ tab: index });
  };
}

export default withStyles(styles, { withTheme: true })(YBTabs);
