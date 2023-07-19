"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Stock {
    // Check if item exists in stock
    static itemExists(item) {
        var _a;
        return (((_a = Stock.listItems.find((elem) => elem.code === item.code)) === null || _a === void 0 ? void 0 : _a.quantity) > 0);
    }
}
Stock.listItems = [
    new Item_1.default("code1", 200, 15),
    new Item_1.default("code2", 100, 19),
    new Item_1.default("code3", 150, 32),
];
exports.default = Stock;
//# sourceMappingURL=Stock.js.map