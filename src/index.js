import dotenv from "dotenv";
import startApp from "./loader/index.loader.js";
import test from "./models/test.models.js";

dotenv.config({
  path: "./.env",
});

test.sync();

try {
  startApp();
} catch (error) {
  throw error;
}
