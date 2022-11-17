import express from "express";
import cors from "cors"
import { commentsRoute } from "./routes/comments.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())

app.use("/api/v1/comments", commentsRoute)


app.listen(port, () => console.log(`server is listening on port ${port}`));
