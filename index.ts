import express from "express";
import { db } from "./connect/mssql";
import { createAnUser, getAllUsers } from "./user/user.service";

const app = express();
app.use(express.json());
const tempEnv = {
  port: 3000,
};

async function bootstrap() {
  if ((await db())?.connected) {
    console.log("Database connected");

    app.post("/api/user/register", async (req, res) => {
      const result = await createAnUser(req.body);

      res.send(result);
    });

    app.get("/api/users", async (req, res) => {
      const result = await getAllUsers();
      res.send(result);
    });
  }
}
bootstrap();
app.listen(tempEnv.port, () => {
  console.log("server is running in port: " + tempEnv.port);
});
