import { SimpleHttClient } from "./clases/SimpleHttpClient";
import { FetchAdapter } from "./clases/FetchAdapter";
import { AxiosAdapter } from "./clases/AxiosAdapter";

type Todo = { userId: number; id: number; title:string; completed: boolean};

export async function runAdapter(): Promise<void> {
    console.log("ADAPTER: Fetch <-> Axios");
    const url = "https://jsonplaceholder.typicode.com/todos/1";

    const client = new SimpleHttClient(new FetchAdapter());
    const withFetch = await client.get<Todo>(url);
    console.log("Con fetch: ", withFetch)

    client.setAdapter(new AxiosAdapter())
    const withAxios = await client.get<Todo>(url)
    console.log("Con axios: ",withAxios)
}