import { httpServer } from "../app.js";

const startServer = () => {
  httpServer.listen(process.env.PORT || 8080, process.env.SERVER, () => {
    console.info(
      `📑 Visit the documentation at: http://localhost:${
        process.env.PORT || 8080
      }`
    );
    console.log("⚙️  Server is running on port: " + process.env.PORT);
  });
};

export default startServer;
