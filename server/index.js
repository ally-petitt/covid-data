import express from "express";
import router from "./routes/routes.js";

const app = express();

app.get("/", router);

app.listen(4000, () => {
  console.log("Express API running on port 4000")
})