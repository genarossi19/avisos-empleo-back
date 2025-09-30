// Controlador CRUD para Company
import data from "../data.js";
import Company from "./company.model.js";

const getAllCompanies = (req, res) => {
  res.json(data.companies);
};

const getCompanyById = (req, res) => {
  const id = parseInt(req.params.id);
  const company = data.companies.find((c) => c.id === id);
  if (company) {
    res.json(company);
  } else {
    res.status(404).json({ error: "Company not found" });
  }
};
const createCompany = (req, res) => {
  const { name, email, companyDescription, createdAt, imgUrl } = req.body;
  const newId =
    data.companies.length > 0
      ? Math.max(...data.companies.map((c) => c.id)) + 1
      : 1;
  const newCompany = new Company(
    newId,
    name,
    email,
    companyDescription,
    createdAt,
    imgUrl
  );
  data.companies.push(newCompany);
  res.status(201).json(newCompany);
};

const updateCompany = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, companyDescription, createdAt, imgUrl } = req.body;
  const company = data.companies.find((c) => c.id === id);
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }
  if (name !== undefined) company.name = name;
  if (email !== undefined) company.email = email;
  if (companyDescription !== undefined)
    company.companyDescription = companyDescription;
  if (createdAt !== undefined) company.createdAt = createdAt;
  if (imgUrl !== undefined) company.imgUrl = imgUrl;
  res.json(company);
};

const deleteCompany = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = data.companies.findIndex((c) => c.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: "Company not found" });
  }
  const deleted = data.companies.splice(idx, 1)[0];
  res.json(deleted);
};

export default {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};
