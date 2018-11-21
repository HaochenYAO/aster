import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import YBNavbar from "../../components/navbar/YBNavbar";
const YBHero = React.lazy(() => import('src/components/hero/YBHero'));
const YBCardLayout = React.lazy(() => import('src/components/cardLayout/YBCardLayout'));
import YBFooter from "../../components/footer/YBFooter";

import { MCard } from "../../models/MCard";
import { MHyper } from "../../models/MHyper";

class Welcome extends React.Component {
  public render() {
    const cardPile = new MCard(1, '/img/pile.jpg', '电池', '喻柏电池', new MHyper('目录', ''), new MHyper('文档', ''), 'test');
    const cardLCD = new MCard(2, '/img/lcd.jpg', '液晶', '喻柏液晶', new MHyper('目录', ''), new MHyper('文档', ''), 'test');
    const cardOther = new MCard(3, '/img/lcd.jpg', '其他', '喻柏其他', new MHyper('目录', ''), new MHyper('文档', ''), 'test');
    const cards = new Array<MCard>();
    cards.push(cardPile, cardLCD, cardOther);
    return (
      <React.Fragment>
        <YBNavbar />
        <React.Suspense fallback={<div>Loading...</div>}>
        <YBHero />
        </React.Suspense>
        <Carousel transitionTime={500} infiniteLoop={true} autoPlay={true}>
          <div>
            <img src="/img/product/WechatIMG1.jpeg" />
            <p className="legend">家用健身器显示屏</p>
          </div>
          <div>
            <img src="/img/product/WechatIMG2.jpeg" />
            <p className="legend">代步电动汽车显示屏</p>
          </div>
          <div>
            <img src="/img/product/WechatIMG3.jpeg" />
            <p className="legend">艾玛电动车</p>
          </div>
        </Carousel>
        <React.Suspense fallback={<div>Loading...</div>}>
        <YBCardLayout cards={cards}/>
        </React.Suspense>
        <YBFooter />
      </React.Fragment>
    );
  }
}

export default Welcome;
