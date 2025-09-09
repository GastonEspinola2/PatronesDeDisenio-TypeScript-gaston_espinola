import { Professor } from "./clases/Professor";
import { Student } from "./clases/Student";

export async function runObserver(): Promise<void> {
    console.log("OBSERVER: Profesor -> Alumnos");
    const prof = new Professor("Centurión");
    const gaston = new Student("Gastón");
    const joao = new Student("Joao");

    prof.subscribe(gaston);
    prof.subscribe(joao);

    prof.publish("Multiplicacion de matrices - Fecha de entrega hoy a las 13:30")

    prof.unsubscribe(joao)
    
    prof.publish("Suma y resta de matrices - Fecha de entrega hoy a las 14:00")
}