import dotenv from "dotenv";
import startApp from "./loader/index.loader.js";

dotenv.config({
  path: "./.env",
});

try {
  startApp();
} catch (error) {
  throw error;
}
