import { Router } from "express";
import reposRouter from "./reposRouter.js";

const router = Router();

router.use(reposRouter);

export default router;