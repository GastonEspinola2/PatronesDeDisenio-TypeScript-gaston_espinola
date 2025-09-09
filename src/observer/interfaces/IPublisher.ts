import { Isubscriber } from "./ISubscriber";

export interface IPublisher {
    subscribe(sub:Isubscriber):void;
    unsubscribe(sub:Isubscriber):void;
    publish(message:string):void;
}