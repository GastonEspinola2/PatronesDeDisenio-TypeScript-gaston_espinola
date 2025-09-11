import { ConexionDB } from "./clases/ConexionDB";

export async function runSingleton(): Promise<void> {
    console.log("SINGLETON: ConexionDB de Inventario");

    const db1 = ConexionDB.getInstance({ user: "inventario_user" });
    await db1.connect();

    const db2 = ConexionDB.getInstance();
  await db2.connect();

    await db1.disconnect();
  await db2.disconnect();
}
