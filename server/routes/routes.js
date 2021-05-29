import getYear from "../controller/controller.js";

import express from "express";

const router = express.Router();

router.get("/", getYear);

export default router;