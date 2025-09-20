import express from 'express';
import {
  AuthenticateUser,
  SignIn,
  SignUp,
} from '../../controller/controller.js';

const UserRouter = express.Router();

UserRouter.post('/sign-up', SignUp);
UserRouter.post('/sign-in', SignIn);
UserRouter.post('/auth/verify', AuthenticateUser);

export default UserRouter;
