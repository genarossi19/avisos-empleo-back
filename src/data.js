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
    "2025-09-29", // más de 3 días -> featured: false
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
    "2025-09-28", // más de 3 días -> featured: false
    1200,
    2500,
    "Presencial",
    1,
    5
  ),
  new Job(
    3,
    "Analista QA",
    "Asegura la calidad del software mediante testing manual y automatizado.",
    `Participará en el ciclo completo de pruebas de software, diseño de casos de test y reporte de incidencias. 
    Se valorará experiencia en Cypress o Playwright y conocimiento de metodologías ágiles.`,
    1,
    1,
    1,
    "2025-10-06", // hace 1 día -> featured: true
    900,
    1800,
    "Remoto",
    1,
    3
  ),
  new Job(
    4,
    "Project Manager IT",
    "Gestiona proyectos tecnológicos con equipos multidisciplinarios.",
    `Será responsable de coordinar equipos técnicos, gestionar recursos y asegurar la entrega de proyectos dentro del tiempo y presupuesto establecidos. 
    Se requiere experiencia en metodologías ágiles (Scrum, Kanban).`,
    1,
    2,
    2,
    "2025-10-05", // hace 2 días -> featured: true
    2000,
    4000,
    "Híbrido",
    5,
    2
  ),
  new Job(
    5,
    "Soporte Técnico Nivel 2",
    "Brinda soporte avanzado a usuarios y clientes.",
    `Resolverá incidencias técnicas escaladas, realizará diagnósticos remotos y documentará procedimientos. 
    Ideal para perfiles con experiencia previa en help desk y conocimientos de redes.`,
    2,
    1,
    2,
    "2025-10-07", // hoy -> featured: true
    800,
    1500,
    "Presencial",
    1,
    4
  ),
  new Job(
    6,
    "Data Analyst",
    "Analiza datos y genera insights para la toma de decisiones.",
    `Deberá diseñar dashboards y reportes en herramientas como Power BI o Tableau, y manejar SQL para la extracción de datos. 
    Se valorará experiencia en Python y análisis estadístico.`,
    1,
    1,
    1,
    "2025-09-15", // hace más de 3 días -> featured: false
    1800,
    3000,
    "Remoto",
    2,
    6
  ),
  new Job(
    7,
    "DevOps Engineer",
    "Implementa y mantiene pipelines de CI/CD.",
    `Responsable de automatizar procesos de integración y despliegue, gestionar infraestructura como código y optimizar entornos en la nube. 
    Se requiere conocimiento en Docker, Kubernetes y AWS.`,
    1,
    2,
    2,
    "2025-10-04", // hace 3 días exactos -> featured: true
    2500,
    4500,
    "Remoto",
    4,
    1
  ),
];
const companies = [
  new Company(
    1,
    "Tech Solutions",
    "contacto@tech.com",
    "Empresa de tecnología",
    "2024-01-01",
    "https://avatar.iran.liara.run/public"
  ),
  new Company(
    2,
    "DesignPro",
    "info@designpro.com",
    "Agencia de diseño",
    "2024-02-15",
    "https://avatar.iran.liara.run/public"
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
