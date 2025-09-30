// Controlador CRUD para Localidad
import data from "../data.js";
import Localidad from "./localidad.model.js";

const getAllLocalidades = (req, res) => {
  res.json(data.localidades);
};

const getLocalidadById = (req, res) => {
  const id = parseInt(req.params.id);
  const localidad = data.localidades.find((l) => l.id === id);
  if (localidad) {
    res.json(localidad);
  } else {
    res.status(404).json({ error: "Localidad not found" });
  }
};
const createLocalidad = (req, res) => {
  const { provinciaId, localityName } = req.body;
  // Generar nuevo id incremental
  const newId =
    data.localidades.length > 0
      ? Math.max(...data.localidades.map((l) => l.id)) + 1
      : 1;
  const nuevaLocalidad = new Localidad(newId, provinciaId, localityName);
  data.localidades.push(nuevaLocalidad);
  res.status(201).json(nuevaLocalidad);
};

const updateLocalidad = (req, res) => {
  const id = parseInt(req.params.id);
  const { provinciaId, localityName } = req.body;
  const localidad = data.localidades.find((l) => l.id === id);
  if (!localidad) {
    return res.status(404).json({ error: "Localidad not found" });
  }
  if (provinciaId !== undefined) localidad.provinciaId = provinciaId;
  if (localityName !== undefined) localidad.localityName = localityName;
  res.json(localidad);
};

const deleteLocalidad = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = data.localidades.findIndex((l) => l.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: "Localidad not found" });
  }
  const deleted = data.localidades.splice(idx, 1)[0];
  res.json(deleted);
};

export default {
  getAllLocalidades,
  getLocalidadById,
  createLocalidad,
  updateLocalidad,
  deleteLocalidad,
};
