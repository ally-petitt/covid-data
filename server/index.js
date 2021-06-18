import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

app.use("/graph", router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("Express API running on port 4000")
})