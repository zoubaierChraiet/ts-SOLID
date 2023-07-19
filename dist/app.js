"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("./1.SingleResponsibility/Cart"));
const Item_1 = __importDefault(require("./1.SingleResponsibility/Item"));
const myCart = new Cart_1.default();
const item1 = new Item_1.default("code1", 3, 15);
const item2 = new Item_1.default("code2", 6, 20);
console.log(myCart.);
//# sourceMappingURL=app.js.map