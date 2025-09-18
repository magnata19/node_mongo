import { Request, Response } from "express";
import {  UserService } from "./user.service";
import { sign } from "jsonwebtoken";
import Config from "../../config";

const registerUser = async (req: Request, res: Response) => {
  const {email, password, role} = req.body;
  try {
    const userExisted = await UserService.findUserByEmail(email);
    if(userExisted) {
      res.status(400).json({
        message: "User already exists."
      })
      return
    }
    const userRole = role || "user";
    const user = await UserService.createUser({email, password, role: userRole});
    return res.status(201).json({
      message: "User created successfully.",
      user
    })
  } catch (err: any) {
    res.status(500).json({
      message: "User register failed.",
      error: err
    })
  }
}

const signIn = async (req: Request, res: Response) => {
  const {email, password} = req.body;
  try {
    const user = await UserService.findUserByEmail(email);
    if(!user) {
      res.status(404).json({
        message: "Invalid email or password."
      })
    }

    const isPasswordValid = UserService.validatePassword(password, user!.password);
    if(!isPasswordValid) {
      res.status(404).json({
        message: "Password is incorrect."
      })
    }

    const token = sign({
      email: user!.email,
      role: user?.role}, Config.jwt_secret as string, {
        expiresIn: '24h'
      })

      res.status(200).json({
        message: "Login successfully.",
        token: token
      })
  } catch (err: any) {
    res.status(500).json({
      message: "Login failed, try again.",
      error: err
    })
  }
}

export const UserController = {
  registerUser,
  signIn
}