import Cart from "./Cart";
import EmailService from "./EmailService";
import PrintingService from "./PrintingService";

class Invoice {
  createInvoice(cart: Cart) {
    const sum = cart.listItems.reduce((acc, curr) => {
      return (acc += curr.price * curr.quantity);
    }, 0);

    //! You should not implement email sending code in Invoice Class
    EmailService.send();

    //! You should not implement printing code in Invoice Class
    PrintingService.print();
  }
}

export default Invoice;
