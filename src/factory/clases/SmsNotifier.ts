import { INotifier } from "../interfaces/INotifier";

const phoneRegex = /^\+?\d{10,15}$/;

export class SmsNotifier implements INotifier {
    async send(to: string, message: string): Promise<void> {
    if (!phoneRegex.test(to)) throw new Error("Número SMS inválido");
    console.log(`[SMS] A: ${to} — ${message}`);
    }
}
