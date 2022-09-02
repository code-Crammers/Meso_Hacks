import express from "express";
import cors from "cors";

const app = express();
const port = process.env.port || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("server is running");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
