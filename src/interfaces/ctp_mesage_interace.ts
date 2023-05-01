export interface CtpRequest {
  MsgType: string;
  RequestID: number;
}

export interface RspInfo {
  ErrorID: number;
  ErrorMsg: string;
}

export interface CtpResponse {
  MsgType: string;
  RequestID: number;
  RspInfo: RspInfo;
  IsLast: boolean;
}
