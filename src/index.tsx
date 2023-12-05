import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import BaseHTML from "./html";

const app = new Elysia();

let i = -1;
const users = [];

app.use(html());

app.get("/", () => (
  <BaseHTML title={"Hello World"}>
    <div class='bg-slate-300 border-solid border-2 border-black'>
      <h1>Welcome to my home page</h1>
      <form hx-swap="outerHTML" hx-target="#body" hx-post="/create-post">
        <input name="username" placeholder="Type Username Here!" />
        <input name="password" placeholder="Type Password Here!" />
        <button>SUBMIT</button>
      </form>
    </div>
  </BaseHTML>
));

app.post("/create-post", ({ body }) => {
  users.push(body.username);
  i++;
  if (body.username != "" && body.password != "") {
    return (
      <div class="bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 flex justify-center">
        <div class="h-screen w-[50%] bg-slate-300 opacity-75 flex justify-center">
          <h1 class="text-5xl">Hi There {users[i]}</h1>
        </div>
      </div>
    );
  } else {
    return <h1>Username And / Or Cannot Be Empty</h1>;
  }
});

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
