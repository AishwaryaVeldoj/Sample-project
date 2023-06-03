import express from "express";
import loginController from "../controllers/loginController";
const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);

export default router;
