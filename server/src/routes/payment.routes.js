import { Router } from "express";
import { getKey, processPayment } from "../controllers/payment.controller.js";

const router = Router();

router.route("/processPayment").post(processPayment);
router.route("/getKey").get(getKey);

export default router;