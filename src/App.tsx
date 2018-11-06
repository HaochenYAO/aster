import * as React from "react";
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
        <YBCardLayout cards={cards}/>
        <YBFooter />
      </React.Fragment>
    );
  }
}

export default App;
