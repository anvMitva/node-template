import express from "express";
import { createServer } from "http";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middlewares.js";
import morganMiddleware from "./logger/morgan.logger.js";
import { APP } from "./constant.js";

const app = express();

const httpServer = createServer(app);

app.use(
  cors({
    origin:
      process.env.CORS_ORIGIN === "*"
        ? "*"
        : process.env.CORS_ORIGIN?.split(","),
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(morganMiddleware);

app.get("/", (req, res) => {
  res.send(`Welcome to App ${APP}`);
});

app.use(errorHandler)

export { httpServer };
