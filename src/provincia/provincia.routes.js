import express from "express";
import provinciaController from "./provincia.controller.js";
const router = express.Router();

router.get("/", provinciaController.getAllProvincias);
router.get("/:id", provinciaController.getProvinciaById);
router.post("/", provinciaController.createProvincia);
router.put("/:id", provinciaController.updateProvincia);
router.delete("/:id", provinciaController.deleteProvincia);

export default router;
