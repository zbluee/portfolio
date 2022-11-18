import express from "express";
import cors from "cors";
import { commentsRoute } from "./routes/comments.js";
import { notFoundMiddleware } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/v1/comments", commentsRoute);
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware);

app.listen(port, () => console.log(`server is listening on port ${port}`));
