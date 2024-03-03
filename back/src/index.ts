import express from "express";
import cors from "cors";
import indexRouter from "./routes/indexRouter";

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
