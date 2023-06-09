export class MdClient {
  ws: WebSocket;
  username: string;
  password: string;

  // public OnRspUserLogin: (any) => void;

  constructor(url: string, username: string, password: string) {
    this.ws = new WebSocket(url);
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onerror = this.onError.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
    this.username = username;
    this.password = password;
  }

  // implement the callback methods
  onOpen(event: any) {
    // log
    console.log('Connection opened');
    this.login();
  }

  onClose(event: any) {
    // log
    console.log('Connection closed')
  }

  onError(event: any) {
    // log the error in the event
    console.log('Connection error', event)
  }

  onMessage(event: any) {
    // Get the data from event, and then use the MsgType field find the callback in the callback objects
    let data = JSON.parse(event.data.toString());
    this[data.MsgType](data);
  }

  login() {
    // implement the login method
    let loginMsg = {
      MsgType: 'ReqUserLogin',
      ReqUserLogin: {
        UserID: this.username,
        Password: this.password
      }
    }
    this.ws.send(JSON.stringify(loginMsg))
  }

  OnRspUserLogin(data: any) {
    console.log("OnRspUserLogin", data);
  }

}
