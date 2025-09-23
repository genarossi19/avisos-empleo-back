import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(logger("dev"));
const port = process.env.PORT;

app.get("/admin", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.get("/", (_, res) => {
  res.send(`Backend corriendo en puerto: ${port}`);
});

app.get("/company", (_, res) => {
  res.json({
    name: "Coderhouse",
    email: "0oNt8@example.com",
    location: "Buenos Aires",
  });
});

const fechaActual = new Date();

app.get("/jobs-postings", (_, res) => {
  res.json([
    {
      id: 1,
      title: "Frontend Developer",
      description: "Desarrollo de software en frontend react",
      location: "Buenos Aires",
      contractType: "Full Time",
      publicationDate: fechaActual,
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "Desarrollo de backend en express",
      location: "Trenque Lauquen",
      contractType: "Full Time",
      publicationDate: fechaActual,
    },
    {
      id: 3,
      title: "BD Developer",
      description: "Desarrollo de base de datos en sql server",
      location: "La Plata",
      contractType: "Full Time",
      publicationDate: fechaActual,
    },
  ]);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
