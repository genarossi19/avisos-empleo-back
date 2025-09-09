import express from "express";
import dotenv from "dotenv";
import logger from "morgan";

dotenv.config();
const app = express();
app.use(logger("dev"));
const port = process.env.PORT;

app.get("/admin", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.get("/", (_, res) => {
  res.send(`Backend corriendo en puerto: ${port}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
