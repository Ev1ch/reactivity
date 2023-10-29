export default class Item {
  public done: boolean;

  constructor(public purchase: string, public price: number) {
    this.done = false;
  }
}
