import userRepository from "../repositories/usersRepository";
import { createUserRequest } from "../types/usersType";

const usersController = {
  async getAllUsers() {
    return await userRepository.getAllUsers();
  },
  async create({ name, email }: createUserRequest) {
    return await userRepository.createUser({ name, email });
  },
};

export default usersController;
