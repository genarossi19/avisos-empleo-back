import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
dotenv.config();

import jobRouter from "./src/job/job.routes.js";
import companyRouter from "./src/company/company.routes.js";
import contractTypeRouter from "./src/contractType/contractType.routes.js";
import localidadRouter from "./src/localidad/localidad.routes.js";
import provinciaRouter from "./src/provincia/provincia.routes.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(logger("dev"));
app.use(express.json());
const port = process.env.PORT;

// Rutas CRUD
app.use("/job", jobRouter);
app.use("/company", companyRouter);
app.use("/contractType", contractTypeRouter);
app.use("/localidad", localidadRouter);
app.use("/provincia", provinciaRouter);

app.get("/admin", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.get("/", (_, res) => {
  res.send(`Backend corriendo en puerto: ${port}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
