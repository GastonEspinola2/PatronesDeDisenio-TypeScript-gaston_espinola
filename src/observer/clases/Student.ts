import { Isubscriber } from "../interfaces/ISubscriber";

export class Student implements Isubscriber{
    constructor(public readonly name:string){}
    update(message: string): void {
        console.log(`[Alumno ${this.name}] Nueva notificacion: ${message} `)
    }
}