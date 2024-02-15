import express, { Request, Response } from "express";
import userRepository from "../repositories/usersRepository";
import usersController from "../controllers/usersController";

const router = express.Router();
/**
 ** /users
 */

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await usersController.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req: Request, res: Response) => {
  if (!req.body.name || !req.body.email) {
    res.status(400).send("Name and email are required");
    return;
  }
  try {
    const user = await usersController.create(req.body);
    res.json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default router;
