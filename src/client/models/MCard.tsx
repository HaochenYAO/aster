import { MHyper } from './MHyper';

export class MCard {
  constructor(
    public id: number, 
    public img: string,
    public heading: string,
    public content: string,
    public button1: MHyper,
    public button2: MHyper,
    public title: string) {
  }
}
