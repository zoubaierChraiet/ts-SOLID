import Item from "./Item";

class Stock {
  public static listItems: Item[] = [
    new Item("code1", 200, 15),
    new Item("code2", 100, 19),
    new Item("code3", 150, 32),
  ];

  // Check if item exists in stock
  public static itemExists(item: Item) {
    return (
      Stock.listItems.find((elem) => elem.code === item.code)?.quantity > 0
    );
  }
}

export default Stock;
