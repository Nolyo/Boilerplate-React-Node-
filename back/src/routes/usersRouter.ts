import express, { Request, Response } from "express";
import usersController from "../controllers/usersController";
import { verifyUser } from "./authMiddleware";
import { authenticateUserRequest } from "../types/usersType";

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

router.get(
  "/me",
  verifyUser,
  async (req: Request & authenticateUserRequest, res: Response) => {
    try {
      const user = await usersController.getById(req.userId as number);
      res.json(user);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
);

router.get("/:id", verifyUser, async (req: Request, res: Response) => {
  if (!req.params.id || isNaN(parseInt(req.params.id))) {
    res.status(400).send("Id is required");
    return;
  }
  try {
    const user = await usersController.getById(parseInt(req.params.id));
    res.json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.post("/signup", async (req: Request, res: Response) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(400).send("Name, email and password are required");
    return;
  }
  try {
    const user = await usersController.create(req.body);
    res.json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  console.log(req.body, "req.body");

  if (!req.body.email || !req.body.password) {
    res.status(400).send("Email and password are required");
    return;
  }
  try {
    const user = await usersController.login(req.body);
    res.json(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default router;
