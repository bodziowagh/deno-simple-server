import { Application } from "https://deno.land/x/oak/mod.ts";

const port = Number(Deno.env.get("PORT")) ?? 8080;

const app = new Application();

app.use((ctx) => {
  console.log("middleware 1");
});

await app.listen({ port });
