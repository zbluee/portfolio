import express from "express";
import cors from "cors"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.get("/test", (req, res) => {
  res.json("success");
});

app.listen(port, () => console.log(`server is listening on port ${port}`));
