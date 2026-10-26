import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Bajamos 2 niveles para encontrar pages
const rootDir = path.resolve(__dirname, "../..");
const router = express.Router();

router.get("/clientes", (req, res) => {
    res.sendFile(path.join(rootDir, "pages", "clientes.html"));
});

export default router;