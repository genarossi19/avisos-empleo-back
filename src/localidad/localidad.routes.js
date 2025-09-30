import express from "express";
import localidadController from "./localidad.controller.js";
const router = express.Router();

router.get("/", localidadController.getAllLocalidades);
router.get("/:id", localidadController.getLocalidadById);
router.post("/", localidadController.createLocalidad);
router.put("/:id", localidadController.updateLocalidad);
router.delete("/:id", localidadController.deleteLocalidad);

export default router;
