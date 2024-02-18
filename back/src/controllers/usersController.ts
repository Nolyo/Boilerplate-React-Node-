import userRepository from "../repositories/usersRepository";
import { createUserRequest } from "../types/usersType";
import jwt from "jsonwebtoken";

const usersController = {
  async getAllUsers() {
    return await userRepository.getAllUsers();
  },

  async create({ name, email, password }: createUserRequest) {
    return await userRepository.createUser({ name, email, password });
  },

  async login({ email, password }: createUserRequest) {
    const user = await userRepository.authenticateUser(email, password);
    if (!user) {
      throw new Error("Email or password are incorrect");
    }

    const token = signToken(user.id);
    user.token = token;

    return user;
  },

  async getById(id: number) {
    return await userRepository.getById(id);
  },
};

export function signToken(id: number) {
  console.log(process.env.JWT_SECRET);
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: 60 * 60 * 24,
  });
}

export default usersController;
