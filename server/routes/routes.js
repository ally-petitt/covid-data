import getYear, { getCountry, getTotals } from "../controller/controller.js";

import express from "express";

const router = express.Router();

router.get("/year", getYear);
router.get("/country/:country", getCountry)
router.get("/totals/world", getTotals)

export default router;