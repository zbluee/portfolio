import {} from "dotenv/config";
import "express-async-errors";

//security packages
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean"

import express from "express";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import { connectDB } from "./db/connection.js";
import { authRoute } from "./routes/auth.js";
import { commentsRoute } from "./routes/comments.js";
import { notFoundMiddleware } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { worksRoute } from "./routes/works.js";
import { testimoniesRoute } from "./routes/testimonies.js";
import { skillsRoute } from "./routes/skills.js";
import { servicesRoute } from "./routes/services.js";
import { aboutRoute } from "./routes/about.js";

//loading yaml file
const docs = YAML.load("./docs.yaml")

const app = express();
const port = process.env.PORT || 3001;

app.set('trust proxy', 1);
app.use(express.json());
app.use(cors());
app.use(helmet())
app.use(xss())

//routes
app.use("/", swaggerUI.serve, swaggerUI.setup(docs))
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/comments", commentsRoute);
app.use("/api/v1/works", worksRoute);
app.use("/api/v1/testimonies", testimoniesRoute);
app.use("/api/v1/skills", skillsRoute);
app.use("/api/v1/services", servicesRoute);
app.use("/api/v1/about", aboutRoute);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
