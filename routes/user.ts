import { Router } from "express";
import { userRegister, userLogin } from "../controllers/user";

const userRoutes = Router();

userRoutes.post("/register", userRegister);

userRoutes.post("/login", userLogin);

export default userRoutes;
