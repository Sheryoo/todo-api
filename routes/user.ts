import { Router } from "express";
import { userRegister, userLogin } from "../controllers/user";

const userRoutes = Router();

userRoutes.post("/register", (req, res) => userRegister(req, res));

userRoutes.post("/login", (req, res) => userLogin(req, res));

export default userRoutes;
