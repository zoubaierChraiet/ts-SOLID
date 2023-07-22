import IMessage from "./IMessage";

class Hotmail implements IMessage {
  public adress: string = "adress";
  public from: string = "from";
  public toAdress: string = "toAdress";
  public send() {}
}

export default Hotmail;
