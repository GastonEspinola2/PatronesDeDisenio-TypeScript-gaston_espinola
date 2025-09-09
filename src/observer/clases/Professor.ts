import { IPublisher } from "../interfaces/IPublisher";
import { Isubscriber } from "../interfaces/ISubscriber";

export class Professor implements IPublisher{
    private subs = new Set<Isubscriber>();
    
    constructor (public readonly name:string){}

    subscribe(sub: Isubscriber): void {
        this.subs.add(sub);
    }
    
    unsubscribe(sub: Isubscriber): void {
        this.subs.delete(sub);
    }

    publish(message: string): void {
        console.log(`[Profesor] Publicó ${message}`);
        for (const s of this.subs) s.update(message);
    }
}
