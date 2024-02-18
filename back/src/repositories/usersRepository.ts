import bcrypt from "bcrypt";
import db from "../../prisma/db";

import { createUserRequest } from "../types/usersType";

const userRepository = {
  async getAllUsers() {
    return await db.user.findMany();
  },

  async createUser({ name, email, password }: createUserRequest) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await db.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
  },

  async authenticateUser(email: string, password: string) {
    const user = await db.user.findUnique({
      where: {
        email: email || "",
      },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.hashedPassword || ""
    );

    if (!isPasswordValid) {
      return null;
    }

    return user;
  },

  async getById(id: number) {
    return await db.user.findUnique({
      where: {
        id,
      },
    });
  },
};

export default userRepository;
