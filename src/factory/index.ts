import { NotifierFactory } from "./clases/NotifierFactory.js";

export async function runFactory(): Promise<void> {
    console.log("\n=== FACTORY: Crear notificaciones (Email/SMS/WhatsApp) ===");
    const email = NotifierFactory.create("email");
    const sms = NotifierFactory.create("sms");
    const wa = NotifierFactory.create("whatsapp");

    await email.send("ana@mail.com", "Recordatorio de clase a las 10:00.");
    await sms.send("+5493700000000", "Tu nota de TP1 ya está disponible.");
    await wa.send("+5493700000000", "Se reprogramó la clase para mañana 9:00.");
}
