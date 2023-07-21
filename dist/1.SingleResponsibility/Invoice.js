"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = __importDefault(require("./EmailService"));
const PrintingService_1 = __importDefault(require("./PrintingService"));
class Invoice {
    createInvoice(cart) {
        const sum = cart.listItems.reduce((acc, curr) => {
            return (acc += curr.price * curr.quantity);
        }, 0);
        //! You should not implement email sending code in Invoice Class
        EmailService_1.default.send();
        //! You should not implement printing code in Invoice Class
        PrintingService_1.default.print();
    }
}
exports.default = Invoice;
//# sourceMappingURL=Invoice.js.map