import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import routes from "./routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Subimos a la raiz del proyecto
const rootDir = path.resolve(__dirname, "..");
const server = express();
const port = 3000;

server.set("port", port);

// Rutas estaticas para paginas y estilos
server.use("/styles", express.static(path.join(rootDir, "styles")));
server.use("/pages", express.static(path.join(rootDir, "pages")));

// Todas las rutas de paginas viven en app/routes/
server.use(routes);

export default server;
