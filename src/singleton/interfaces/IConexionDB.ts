export interface DBConfig {
    host: string;
    port: number;
    user: string;
}

export interface IConexionDB {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    isConnected(): boolean;
    getConfig(): DBConfig;
}
