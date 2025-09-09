import { INotifier } from "../interfaces/INotifier";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class EmailNotifier implements INotifier {
    async send(to: string, message: string): Promise<void> {
    if (!emailRegex.test(to)) throw new Error("Email inválido");
    console.log(`[Email] A: ${to} — ${message}`);
    }
}
