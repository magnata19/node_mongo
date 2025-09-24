import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post('/create-account', UserController.registerUser)
router.post('/login', UserController.signIn)
router.get('/all', UserController.getUsers)

export const UserRouter = router;