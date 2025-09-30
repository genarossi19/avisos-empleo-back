import express from "express";
import tipoContratoController from "./tipoContrato.controller.js";
const router = express.Router();

router.get("/", tipoContratoController.getAllTipoContrato);
router.get("/:id", tipoContratoController.getTipoContratoById);
router.post("/", tipoContratoController.createTipoContrato);
router.put("/:id", tipoContratoController.updateTipoContrato);
router.delete("/:id", tipoContratoController.deleteTipoContrato);

export default router;
