import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authenticateUserRequest } from "../types/usersType";

export const verifyUser = (
  req: Request & authenticateUserRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    }

    // if everything good, save to request for use in other routes
    // req.userId = parseInt(decoded?.id as string);
    req.userId = 1;
    next();
  });
};
