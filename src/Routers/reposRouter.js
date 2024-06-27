import { Router } from "express";
import { getAllRepos } from "../Controllers/reposController.js";

const reposRouter = Router();

reposRouter.get("/repos", getAllRepos);

export default reposRouter;