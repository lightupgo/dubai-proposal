import { cp, mkdir, rm } from "node:fs/promises";

await mkdir("public", { recursive: true });
await rm("public/index.html", { force: true });
await rm("public/assets", { recursive: true, force: true });
await rm("public/days", { recursive: true, force: true });
await cp("index.html", "public/index.html");
await cp("assets", "public/assets", { recursive: true });
await cp("days", "public/days", { recursive: true });
