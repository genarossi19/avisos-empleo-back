// Controlador CRUD para Provincia
import data from "../data.js";
import Provincia from "./provincia.model.js";

const getAllProvincias = (req, res) => {
  res.json(data.provincias);
};

const getProvinciaById = (req, res) => {
  const id = parseInt(req.params.id);
  const provincia = data.provincias.find((p) => p.id === id);
  if (provincia) {
    res.json(provincia);
  } else {
    res.status(404).json({ error: "Provincia not found" });
  }
};
const createProvincia = (req, res) => {
  const { provinciaName } = req.body;
  const newId =
    data.provincias.length > 0
      ? Math.max(...data.provincias.map((p) => p.id)) + 1
      : 1;
  const nuevaProvincia = new Provincia(newId, provinciaName);
  data.provincias.push(nuevaProvincia);
  res.status(201).json(nuevaProvincia);
};

const updateProvincia = (req, res) => {
  const id = parseInt(req.params.id);
  const { provinciaName } = req.body;
  const provincia = data.provincias.find((p) => p.id === id);
  if (!provincia) {
    return res.status(404).json({ error: "Provincia not found" });
  }
  if (provinciaName !== undefined) provincia.provinciaName = provinciaName;
  res.json(provincia);
};

const deleteProvincia = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = data.provincias.findIndex((p) => p.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: "Provincia not found" });
  }
  const deleted = data.provincias.splice(idx, 1)[0];
  res.json(deleted);
};

export default {
  getAllProvincias,
  getProvinciaById,
  createProvincia,
  updateProvincia,
  deleteProvincia,
};
