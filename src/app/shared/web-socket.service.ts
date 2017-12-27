import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class WebSocketService {

  ws:WebSocket;

  constructor() { }

  createObservableSocket(url:string, id:number):Observable<any>{
    this.ws = new WebSocket(url);
    //定义流三要素，1.什么时候发送下一个数据，2.什么时候抛一个异常，3.什么时候结束
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
        this.ws.onopen = (event) => this.sendMessage({productId:id});
        return () => this.ws.close();
      }
    ).map(message => {JSON.parse(message)});
  }

  sendMessage(message:any){
    //websocket里收发消息为字符串
    this.ws.send(JSON.stringify(message));
  }


}
