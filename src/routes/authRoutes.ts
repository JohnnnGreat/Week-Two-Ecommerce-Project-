import { Router } from "express";
import { Login, Register } from "../controllers/Auth";

const AuthRouter = Router();

AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login);

export default AuthRouter;
