// Datos hardcodeados para pruebas
import Job from "./job/job.model.js";
import Company from "./company/company.model.js";
import ContractType from "./contractType/contractType.model.js";
import Localidad from "./localidad/localidad.model.js";
import Provincia from "./provincia/provincia.model.js";

const jobs = [
  new Job(
    1,
    "Desarrollador FullStack",
    "Desarrolla aplicaciones web modernas con Node.js y React.",
    `Buscamos un desarrollador FullStack para sumarse a un equipo ágil. 
    Deberá trabajar en el desarrollo de aplicaciones web escalables, mantener buenas prácticas de código, colaborar con diseñadores y otros desarrolladores, y participar en la toma de decisiones técnicas. Se valorará experiencia en cloud y CI/CD.`,
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
    "Diseña interfaces atractivas y funcionales para apps web.",
    `Responsable de crear experiencias de usuario intuitivas y visualmente atractivas. 
    Trabajará junto a desarrolladores y product owners para definir wireframes, prototipos y guías de estilo. Se requiere manejo avanzado de Figma y conocimientos de accesibilidad.`,
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

const contractTypes = [
  new ContractType(1, "Full Time", "full-time"),
  new ContractType(2, "Half Time", "half-time"),
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
  contractTypes,
  provincias,
  localidades,
};
