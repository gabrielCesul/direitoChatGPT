import userRouter from "./controller/userRoutes";
import { Router } from "express";

const routes = Router();

routes.use("/user", userRouter);

export default routes
