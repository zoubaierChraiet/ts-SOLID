"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ! if we implement IOrder we will have to add methods we don't need in this class
// class CashOrder implements IOrder {
//* We have to iplement interface that contains only CashOrder related logics
class CashOrder {
    processCashInvoice() {
        throw new Error("Method not implemented.");
    }
}
exports.default = CashOrder;
//# sourceMappingURL=CashOrder.js.map