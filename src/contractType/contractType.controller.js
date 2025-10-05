import data from "../data.js";
import ContractType from "./contractType.model.js";

const getAllContractTypes = (req, res) => {
  res.json(data.contractTypes);
};

const getContractTypeById = (req, res) => {
  const id = parseInt(req.params.id);
  const ct = data.contractTypes.find((t) => t.id === id);
  if (ct) {
    res.json(ct);
  } else {
    res.status(404).json({ error: "ContractType not found" });
  }
};

const createContractType = (req, res) => {
  const { name, key } = req.body;
  const newId =
    data.contractTypes.length > 0
      ? Math.max(...data.contractTypes.map((t) => t.id)) + 1
      : 1;
  const newCT = new ContractType(newId, name, key);
  data.contractTypes.push(newCT);
  res.status(201).json(newCT);
};

const updateContractType = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, key } = req.body;
  const ct = data.contractTypes.find((t) => t.id === id);
  if (!ct) return res.status(404).json({ error: "ContractType not found" });
  if (name !== undefined) ct.name = name;
  if (key !== undefined) ct.key = key;
  res.json(ct);
};

const deleteContractType = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = data.contractTypes.findIndex((t) => t.id === id);
  if (idx === -1)
    return res.status(404).json({ error: "ContractType not found" });
  const deleted = data.contractTypes.splice(idx, 1)[0];
  res.json(deleted);
};

export default {
  getAllContractTypes,
  getContractTypeById,
  createContractType,
  updateContractType,
  deleteContractType,
};
