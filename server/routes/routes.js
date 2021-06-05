import getYear, { getCountry } from "../controller/controller.js";

import express from "express";

const router = express.Router();

router.get("/year", getYear);
router.get("/country/:country", getCountry)

export default router;