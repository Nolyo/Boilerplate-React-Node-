import db from "../../prisma/db";
import { createUserRequest } from "../types/usersType";

const userRepository = {
  async getAllUsers() {
    return await db.user.findMany();
  },

  async createUser({ name, email }: createUserRequest) {
    return await db.user.create({
      data: {
        name,
        email,
      },
    });
  },
};

export default userRepository;
