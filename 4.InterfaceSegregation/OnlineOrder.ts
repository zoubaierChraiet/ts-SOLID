import { IOnlineOrder } from "./IOrder";

// ! if we implement IOrder we will have to add methods we don't need in this class
// class CashOrder implements IOrder {

//* We have to iplement interface that contains only CashOrder related logics
class OnlineOrder implements IOnlineOrder {
  processOnlinePaymentInvoice(): void {
    throw new Error("Method not implemented.");
  }
}

export default OnlineOrder;
