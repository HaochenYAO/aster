import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import YBNavbar from "../../components/navbar/YBNavbar";
import YBFooter from "../../components/footer/YBFooter";
import withRoot from "../../withRoot";
import YBTabs from "src/components/tabs/YBTabs";
import YBProductList from "src/components/list/YBProductList";

const styles = (theme: Theme) =>
  createStyles({
    listImg: {
      width: 60
    }
  });

class Product extends React.Component<WithStyles<typeof styles>> {
  private productsCrystal = [
    {
      id: 1,
      img: "/img/product/WechatIMG1.jpeg",
      name: "家用健身器显示屏",
      detail: "VA 负显，二色彩显"
    },
    {
      id: 2,
      img: "/img/product/WechatIMG2.jpeg",
      name: "代步电动汽车显示屏",
      detail: "VA 负显，多色彩显"
    },
    {
      id: 3,
      img: "/img/product/WechatIMG3.jpeg",
      name: "电动车仪表盘",
      detail: "VA 负显，多色彩显，八边形切角"
    },
    {
      id: 4,
      img: "/img/product/WechatIMG4.jpeg",
      name: "汽车显示屏",
      detail: "BTN 负显"
    },
    {
      id: 5,
      img: "/img/product/WechatIMG5.jpeg",
      name: "电梯轿厢显示屏",
      detail: "VA 负显，单色彩显"
    },
    {
      id: 6,
      img: "/img/product/WechatIMG6.jpeg",
      name: "油烟机显示屏",
      detail: "VA 负显，四色彩显"
    },
    {
      id: 7,
      img: "/img/product/WechatIMG7.jpeg",
      name: "特种汽车仪表盘",
      detail: "VA 负显，三色彩显"
    },
    {
      id: 8,
      img: "/img/product/WechatIMG8.jpeg",
      name: "电动车仪表盘",
      detail: "VA 负显，多色彩显，八边形切角"
    },
    {
      id: 9,
      img: "/img/product/WechatIMG9.jpeg",
      name: "汽车仪表盘",
      detail: "VA 负显，三色彩显"
    }
  ];

  public render() {
    return (
      <React.Fragment>
        <YBNavbar />
        <YBTabs>
          <YBProductList products={this.productsCrystal}/>
          <YBProductList products={[]}/>
        </YBTabs>
        <YBFooter />
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Product));
