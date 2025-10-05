import express from "express";
import contractTypeController from "./contractType.controller.js";
const router = express.Router();

router.get("/", contractTypeController.getAllContractTypes);
router.get("/:id", contractTypeController.getContractTypeById);
router.post("/", contractTypeController.createContractType);
router.put("/:id", contractTypeController.updateContractType);
router.delete("/:id", contractTypeController.deleteContractType);

export default router;
