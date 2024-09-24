import express from "express";
import sequelize from "./models/database";
import { config } from "dotenv";
import userRoutes from "./routes/user";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

config();

sequelize
  .sync()
  .then(() => {
    console.info("Connection to database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();
const prefix = process.env.PREFIX || "";

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

app.use(prefix + "/users", userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.info(`Server is running on port ${process.env.PORT || 3000}`);
});
