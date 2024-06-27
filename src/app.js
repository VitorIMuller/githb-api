import express, { json } from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"
import errorHandleMiddleware from "./Middlewares/errorHandleMiddleware.js"
import router from "./Routers/index.js"

const app = express()

dotenv.config();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandleMiddleware);


export default app;