import express from "express";
import homeRoutes from "./home_routes.js";
import inventarioRoutes from "./inventario_routes.js";
import comprasRoutes from "./compras_routes.js";

const router = express.Router();

router.use(inventarioRoutes);
router.use(homeRoutes);
router.use(comprasRoutes);

export default router;