import express, { Request, Response } from "express";
import usersRouter from "./usersRouter";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Welcome in Backend");
});

router.use("/users", usersRouter);

export default router;
