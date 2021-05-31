import getYear from "../controller/controller.js";

import express from "express";

const router = express.Router();

router.get("/year", getYear);

export default router;