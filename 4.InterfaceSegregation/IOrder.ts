// ! We have to seperate interfaces
interface IOrder {
  //   processCashInvoice(): void;
  //   processOnlinePaymentInvoice(): void;
  //   processCreditInvoice(): void;
  //? we can add shared logic in three interfaces here and make them extend this interface
}

interface ICashOrder {
  processCashInvoice(): void;
}

interface IOnlineOrder {
  processOnlinePaymentInvoice(): void;
}

interface ICreditOrder {
  processCreditInvoice(): void;
}

export { IOrder, ICashOrder, IOnlineOrder, ICreditOrder };
