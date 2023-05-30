import { AppDataSource } from "../data-source"
import { User_account } from "../model/User_account"

export const userRepository = AppDataSource.getRepository(User_account);
