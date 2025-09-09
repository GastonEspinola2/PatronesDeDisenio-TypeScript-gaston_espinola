import { DBConfig, IConexionDB } from "../interfaces/IConexionDB.js";

export class ConexionDB implements IConexionDB {
    private static instance: ConexionDB | null = null;
    private connected = false;

    private constructor(private config: DBConfig) {}

    static getInstance(config?: Partial<DBConfig>): ConexionDB {
    if (!ConexionDB.instance) {
        const defaultConfig: DBConfig = {
        host: "localhost",
        port: 5432,
        user: "inventario_user",
        };
        ConexionDB.instance = new ConexionDB({ ...defaultConfig, ...config });
    }
    return ConexionDB.instance;
    }

    getConfig(): DBConfig {
    return this.config;
    }

    isConnected(): boolean {
    return this.connected;
    }

    async connect(): Promise<void> {
    if (this.connected) {
        console.log("DB ya está conectada (Singleton).");
        return;
    }
    console.log(
        `Conectado a DB -> ${this.config.user}@${this.config.host}:${this.config.port}`
    );
    this.connected = true;
    }

    async disconnect(): Promise<void> {
    if (!this.connected) {
        console.log("DB ya está desconectada.");
        return;
    }
    console.log("Desconectado de la DB.");
    this.connected = false;
    }
}
