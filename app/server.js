import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Subimos a la raiz del proyecto
const rootDir = path.resolve(__dirname, "..");
const server = express();
const port = Number(process.env.PORT) || 3000;
const frontendDist = path.join(rootDir, "FRONTEND", "Gambare", "dist");

server.set("port", port);

// Archivos heredados disponibles mientras se migra el contenido a React.
server.use("/styles", express.static(path.join(rootDir, "styles")));
server.use("/pages", express.static(path.join(rootDir, "pages")));

// En producción, Express sirve la compilación de React.
server.use(express.static(frontendDist));
server.get("/{*path}", (_req, res, next) => {
    res.sendFile(path.join(frontendDist, "index.html"), (error) => {
        if (error) next(error);
    });
});

export default server;
