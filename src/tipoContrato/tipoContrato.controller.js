// Controlador CRUD para TipoContrato
import data from "../data.js";
import TipoContrato from "./tipoContrato.model.js";

const getAllTipoContrato = (req, res) => {
  res.json(data.tipoContratos);
};

const getTipoContratoById = (req, res) => {
  const id = parseInt(req.params.id);
  const tipoContrato = data.tipoContratos.find(
    (tc) => tc.PK_tipoContratoId === id
  );
  if (tipoContrato) {
    res.json(tipoContrato);
  } else {
    res.status(404).json({ error: "TipoContrato not found" });
  }
};
const createTipoContrato = (req, res) => {
  const { tipoContrato } = req.body;
  const newId =
    data.tipoContratos.length > 0
      ? Math.max(...data.tipoContratos.map((tc) => tc.PK_tipoContratoId)) + 1
      : 1;
  const nuevoTipoContrato = new TipoContrato(newId, tipoContrato);
  data.tipoContratos.push(nuevoTipoContrato);
  res.status(201).json(nuevoTipoContrato);
};

const updateTipoContrato = (req, res) => {
  const id = parseInt(req.params.id);
  const { tipoContrato } = req.body;
  const tc = data.tipoContratos.find((tc) => tc.PK_tipoContratoId === id);
  if (!tc) {
    return res.status(404).json({ error: "TipoContrato not found" });
  }
  if (tipoContrato !== undefined) tc.tipoContrato = tipoContrato;
  res.json(tc);
};

const deleteTipoContrato = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = data.tipoContratos.findIndex((tc) => tc.PK_tipoContratoId === id);
  if (idx === -1) {
    return res.status(404).json({ error: "TipoContrato not found" });
  }
  const deleted = data.tipoContratos.splice(idx, 1)[0];
  res.json(deleted);
};

export default {
  getAllTipoContrato,
  getTipoContratoById,
  createTipoContrato,
  updateTipoContrato,
  deleteTipoContrato,
};
