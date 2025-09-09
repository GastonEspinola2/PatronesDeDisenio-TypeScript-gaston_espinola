import { INotifier } from "../interfaces/INotifier";

const phoneRegex = /^\+?\d{10,15}$/;

export class WhatsappNotifier implements INotifier {
    async send(to: string, message: string): Promise<void> {
    if (!phoneRegex.test(to)) throw new Error("Número WhatsApp inválido");
    console.log(`[WhatsApp] A: ${to} — ${message}`);
    }
}
