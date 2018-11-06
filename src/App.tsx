import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import YBNavbar from "./components/YBNavbar";
import YBHero from "./components/YBHero";
import YBCardLayout from "./components/YBCardLayout";
import YBFooter from "./components/YBFooter";

import { MCard } from "./models/MCard";
import { MHyper } from "./models/MHyper";

class App extends React.Component {
  public render() {
    const cardPile = new MCard(1, '/img/pile.jpg', '电池', '喻柏电池', new MHyper('目录', ''), new MHyper('文档', ''), 'test');
    const cardLCD = new MCard(2, '/img/lcd.jpg', '液晶', '喻柏液晶', new MHyper('目录', ''), new MHyper('文档', ''), 'test');
    const cardOther = new MCard(3, '/img/lcd.jpg', '其他', '喻柏其他', new MHyper('目录', ''), new MHyper('文档', ''), 'test');
    const cards = new Array<MCard>();
    cards.push(cardPile, cardLCD, cardOther);
    return (
      <React.Fragment>
        <YBNavbar />
        <YBHero />
        <Carousel transitionTime={500} infiniteLoop={true} autoPlay={true}>
          <div>
            <img src="/img/carousel/1.jpg" />
            <p className="legend">LA</p>
          </div>
          <div>
            <img src="/img/carousel/2.jpg" />
            <p className="legend">Chicago</p>
          </div>
          <div>
            <img src="/img/carousel/3.jpg" />
            <p className="legend">NY</p>
          </div>
        </Carousel>
        <YBCardLayout cards={cards}/>
        <YBFooter />
      </React.Fragment>
    );
  }
}

export default App;
