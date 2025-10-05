// Controlador CRUD para Job

import data from "../data.js";
import { JobListDTO, JobDetailDTO } from "./job.dto.js";

const getAllJobs = (req, res) => {
  const jobsList = data.jobs.map((job) =>
    JobListDTO(job, data.companies, data.localidades, data.contractTypes)
  );
  res.json(jobsList);
};

const getJobById = (req, res) => {
  const id = parseInt(req.params.id);
  const job = data.jobs.find((j) => j.id === id);
  if (job) {
    res.json(
      JobDetailDTO(job, data.companies, data.localidades, data.contractTypes)
    );
  } else {
    res.status(404).json({ error: "Job not found" });
  }
};
import Job from "./job.model.js";

const createJob = (req, res) => {
  const {
    title,
    description,
    idLocation,
    idContractType,
    companyId,
    publishedDate,
    minSalary,
    maxSalary,
    workMode,
    experiencie,
    applicants,
  } = req.body;
  const newId =
    data.jobs.length > 0 ? Math.max(...data.jobs.map((j) => j.id)) + 1 : 1;
  const newJob = new Job(
    newId,
    title,
    description,
    idLocation,
    idContractType,
    companyId,
    publishedDate,
    minSalary,
    maxSalary,
    workMode,
    experiencie,
    applicants
  );
  data.jobs.push(newJob);
  res.status(201).json(newJob);
};

const updateJob = (req, res) => {
  const id = parseInt(req.params.id);
  const job = data.jobs.find((j) => j.id === id);
  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }
  const {
    title,
    description,
    idLocation,
    idContractType,
    companyId,
    publishedDate,
    minSalary,
    maxSalary,
    workMode,
    experiencie,
    applicants,
  } = req.body;
  if (title !== undefined) job.title = title;
  if (description !== undefined) job.description = description;
  if (idLocation !== undefined) job.idLocation = idLocation;
  if (idContractType !== undefined) job.idContractType = idContractType;
  if (companyId !== undefined) job.companyId = companyId;
  if (publishedDate !== undefined) job.publishedDate = publishedDate;
  if (minSalary !== undefined) job.minSalary = minSalary;
  if (maxSalary !== undefined) job.maxSalary = maxSalary;
  if (workMode !== undefined) job.workMode = workMode;
  if (experiencie !== undefined) job.experiencie = experiencie;
  if (applicants !== undefined) job.applicants = applicants;
  res.json(job);
};

const deleteJob = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = data.jobs.findIndex((j) => j.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: "Job not found" });
  }
  const deleted = data.jobs.splice(idx, 1)[0];
  res.json(deleted);
};

export default {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
