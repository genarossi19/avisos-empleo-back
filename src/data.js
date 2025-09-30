// Datos hardcodeados para pruebas
import Job from "./job/job.model.js";
import Company from "./company/company.model.js";
import TipoContrato from "./tipoContrato/tipoContrato.model.js";
import Localidad from "./localidad/localidad.model.js";
import Provincia from "./provincia/provincia.model.js";

const jobs = [
  new Job(
    1,
    "Desarrollador FullStack",
    "Desarrolla aplicaciones web",
    1,
    1,
    1,
    "2025-09-29",
    1000,
    3000,
    "Remoto",
    2,
    10
  ),
  new Job(
    2,
    "Diseñador UX/UI",
    "Diseña interfaces atractivas",
    2,
    2,
    2,
    "2025-09-28",
    1200,
    2500,
    "Presencial",
    1,
    5
  ),
];

const companies = [
  new Company(
    1,
    "Tech Solutions",
    "contacto@tech.com",
    "Empresa de tecnología",
    "2024-01-01",
    "img1.jpg"
  ),
  new Company(
    2,
    "DesignPro",
    "info@designpro.com",
    "Agencia de diseño",
    "2024-02-15",
    "img2.jpg"
  ),
];

const tipoContratos = [
  new TipoContrato(1, "Tiempo Completo"),
  new TipoContrato(2, "Medio Tiempo"),
];

const provincias = [
  new Provincia(1, "Buenos Aires"),
  new Provincia(2, "Córdoba"),
];

const localidades = [
  new Localidad(1, 1, "La Plata"),
  new Localidad(2, 2, "Villa Carlos Paz"),
];

export default {
  jobs,
  companies,
  tipoContratos,
  provincias,
  localidades,
};
