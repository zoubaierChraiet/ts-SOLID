import Item from "./Item";
import Stock from "./Stock";

class Cart {
  public listItems: Item[] = [];

  itemExistInCart(item: Item) {
    return this.listItems.find((elem) => elem.code === item.code);
  }

  addToCart(item: Item) {
    //! BAD approach you should not iplement
    // const itemExists = Stock.listItems.find((elem) => elem.code === item.code)?.quantity > 0
    // if (itemExists) {
    // Impl.....
    // }

    //* GOOD Approach
    //* logic associated to stock manipulation should be done in stock Class
    if (!Stock.itemExists(item)) throw new Error("item is out of stock");

    if (!this.itemExistInCart(item)) {
      this.listItems.push(item);
      return;
    }

    // item exists in cart
    const indexOfItem = this.listItems.findIndex(
      (elem) => elem.code === item.code
    );
    const itemFound = this.listItems[indexOfItem];
    this.listItems[indexOfItem] = new Item(
      itemFound.code,
      itemFound.quantity + item.quantity,
      itemFound.price
    );
  }
}

export default Cart;
