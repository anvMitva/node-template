import { Sequelize } from "sequelize";
import logger from "../logger/winston.logger.js";
import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  let error = err;
  console.log("err errorHandler", error);

  const username = req.user?.username || "anonymous";

  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof Sequelize.Error ? 400 : 500;

    const message = error.message || "Something went wrong";
    error = new ApiError(statusCode, message, error?.errors || [], error.stack);
  }

  const response = {
    ...error,
    message: error.message,
    ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {}),
  };

  const logMessage = [
    req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    "||",
    username,
    "||",
    req.method,
    "||",
    req.originalUrl,
    "||",
    error.statusCode,
    "||",
    error.message,
  ].join(" ");

  logger.error(logMessage);

  return res.status(error.statusCode).json(response);
};

export { errorHandler };
