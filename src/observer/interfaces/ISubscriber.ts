export interface Isubscriber {
    readonly name: string;
    update(message: string): void
}