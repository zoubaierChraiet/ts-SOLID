"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("./Cart"));
const EmailService_1 = __importDefault(require("./EmailService"));
const PrintingService_1 = __importDefault(require("./PrintingService"));
class Invoice {
    constructor() {
        this.emailService = new EmailService_1.default();
        this.printingService = new PrintingService_1.default();
    }
    sum() {
        return Cart_1.default.listItems.reduce((acc, curr) => {
            return (acc += curr.price * curr.quantity);
        }, 0);
    }
    sendEmail() {
        //! You should not implement email sending code in Invoice Class
        this.emailService.send();
    }
    printRes() {
        //! You should not implement printing code in Invoice Class
        this.printingService.print();
    }
}
exports.default = Invoice;
//# sourceMappingURL=Invoice.js.map