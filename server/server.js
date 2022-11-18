import express from "express";
import { authRoute } from "./routes/auth.js";
import { commentsRoute } from "./routes/comments.js";
import { notFoundMiddleware } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";

// external security packages
import cors from "cors";
import { worksRoute } from "./routes/works.js";
import { testimoniesRoute } from "./routes/testimonies.js";
import { skillsRoute } from "./routes/skills.js";
import { servicesRoute } from "./routes/services.js";
import { aboutRoute } from "./routes/about.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/comments", commentsRoute);
app.use("/api/v1/works", worksRoute);
app.use("/api/v1/testimonies", testimoniesRoute);
app.use("/api/v1/skills", skillsRoute);
app.use("/api/v1/services", servicesRoute);
app.use("/api/v1/about", aboutRoute);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(port, () => console.log(`server is listening on port ${port}`));
