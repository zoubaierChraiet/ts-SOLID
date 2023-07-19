"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
const Stock_1 = __importDefault(require("./Stock"));
class Cart {
    constructor() {
        this.listItems = [];
    }
    itemExistInCart(item) {
        return this.listItems.find((elem) => elem.code === item.code);
    }
    addToCart(item) {
        //! BAD approach you should not iplement
        // const itemExists = Stock.listItems.find((elem) => elem.code === item.code)?.quantity > 0
        // if (itemExists) {
        // Impl.....
        // }
        //* GOOD Approach
        //* logic associated to stock manipulation should be done in stock Class
        if (!Stock_1.default.itemExists(item))
            throw new Error("item is out of stock");
        if (!this.itemExistInCart(item)) {
            this.listItems.push(item);
            return;
        }
        // item exists in cart
        const indexOfItem = this.listItems.findIndex((elem) => elem.code === item.code);
        const itemFound = this.listItems[indexOfItem];
        this.listItems[indexOfItem] = new Item_1.default(itemFound.code, itemFound.quantity + item.quantity, itemFound.price);
    }
}
exports.default = Cart;
//# sourceMappingURL=Cart.js.map