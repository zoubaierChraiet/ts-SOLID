import Cart from "./Cart";
import EmailService from "./EmailService";
import PrintingService from "./PrintingService";

class Invoice {
  sum() {
    return Cart.listItems.reduce((acc, curr) => {
      return (acc += curr.price * curr.quantity);
    }, 0);
  }

  emailService: EmailService = new EmailService();
  printingService: PrintingService = new PrintingService();

  sendEmail() {
    //! You should not implement email sending code in Invoice Class
    this.emailService.send();
  }

  printRes() {
    //! You should not implement printing code in Invoice Class
    this.printingService.print();
  }
}

export default Invoice;
