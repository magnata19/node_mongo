import { TUser } from "./user.interface"
import { User } from "./user.models"
import * as bcryptjs from 'bcryptjs'

export type TCreateUserParams = {
  email: string,
  password: string,
  role: string
}

const findUserByEmail = async(email: string): Promise<TUser | null> => {
  return await User.findOne({email});
}

const createUser = async (user: TCreateUserParams): Promise<TUser> => {
  const hashedPassword = bcryptjs.hashSync(user.password, 10);
  user.password = hashedPassword;
  return await User.create(user);
}

const validatePassword = (inputPassword: string, password: string): boolean => {
  return bcryptjs.compareSync(inputPassword, password)
}

export const UserService = {
  findUserByEmail,
  createUser,
  validatePassword
}