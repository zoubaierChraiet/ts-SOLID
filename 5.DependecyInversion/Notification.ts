// import Gmail from "./Gmail";
// import Hotmail from "./Hotmail";

import IMessage from "./IMessage";

class Notification {
  //! BAD DESIGN Notification should not depend on other classes
  //   public _gmail: Gmail = new Gmail();
  //   public _hotMail: Hotmail = new Hotmail();
  //   public sendGmail() {
  //     this._gmail.send();
  //   }
  //   public sendHotmail() {
  //     this._hotMail.send();
  //   }

  //* Good Design
  private _mailService: IMessage;

  //* CONSRUCTOR INJECTION
  constructor(mailService: IMessage) {
    this._mailService = mailService;
  }

  sendMessage() {
    this._mailService.send();
  }

  //* Method INJECTION
  sendMessageMethod(mailService: IMessage) {
    mailService.send();
  }

  //* Property injection
  private _mailType: IMessage;
  get mailType() {
    return this._mailType;
  }
  set mailType(newMailType: IMessage) {
    this._mailType = newMailType;
  }
  sendMessageProperty() {
    this._mailType.send();
  }
}

export default Notification;
