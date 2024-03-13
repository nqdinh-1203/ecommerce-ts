// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import compression = require("compression");
import Database from "./db/init.mongodb";
import { check_overload } from "./helpers/check_connect";
import { config } from "./configs/config.mongodb";

dotenv.config();

const app: Express = express();
const port = config.app.port;

// Apply middleware into server
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Init DB
const db = Database.get_instance();
check_overload();

app.get("/", (req: Request, res: Response) => {
  const str = "something"
  res.status(500).json({
    message: "Welcome, Tips JS",
    metadata: str.repeat(10000)
  })
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});