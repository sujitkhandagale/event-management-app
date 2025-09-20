import { generateToken, hasPassword, verifyToken } from './helper/helper.js';
import User from '../modal/user/User.js';
import { v4 as uuidv1 } from 'uuid';

export const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    if (!name) {
      return res.status(400).send({
        message: 'Name is required',
      });
    }
    if (!email) {
      return res.status(400).send({
        message: 'Mail is required',
      });
    }
    if (!password) {
      return res.status(400).send({
        message: 'Password is required',
      });
    }
    const hashed = await hasPassword(password, 14);

    const userId = uuidv1();

    const token = generateToken(userId, '28d');

    await User.create({
      name,
      email,
      password: hashed,
      token: token,
    });

    // todo: feature update add email verification and system notification

    return res.status(200).send({
      message: 'Sign up complete.',
      token: token,
    });
  } catch (e) {
    return res.status(500).send({
      message: e?.message || 'Something went wrong',
    });
  }
};
export const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email) {
      return res.status(400).send({ message: 'Email is required' });
    }
    if (!password) {
      return res.status(400).send({ message: 'Password is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    // Generate a new token for session
    const token = generateToken({ userId: user.userId }, '28d');

    // Save token in DB (optional, if you want single-session tracking)
    user.token = token;
    await user.save();

    return res.status(200).send({
      message: 'Sign in successful.',
      token: token,
    });
  } catch (e) {
    return res.status(500).send({
      message: e?.message || 'Something went wrong',
    });
  }
};
export const AuthenticateUser = async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).send({
        message: 'No token provided',
      });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).send({
        message: 'Invalid or expired token',
      });
    }

    const user = await User.findOne({ userId: decoded?.userId, token: token });
    if (!user) {
      return res.status(404).send({
        message: 'User not found',
      });
    }

    return res.status(200).send({
      message: 'Authenticated',
      user: {
        userId: user.userId,
        name: user.name,
        email: user.email,
      },
    });
  } catch (e) {
    return res.status(500).send({
      message: e?.message || 'Something went wrong',
    });
  }
};