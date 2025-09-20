import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Hash a plain password
 * @param {string} password - The plain text password
 * @param {number} saltRounds - The cost factor for hashing
 * @returns {Promise<string>} The hashed password
 */
export const hasPassword = async (password, saltRounds = 10) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (e) {
    console.error('Error hashing password:', e);
    throw e;
  }
};

/**
 * Compare a plain password with a hashed password
 * @param {string} password - The plain text password
 * @param {string} hash - The hashed password
 * @returns {Promise<boolean>} True if matched, false otherwise
 */
export const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (e) {
    console.error('Error comparing password:', e);
    throw e;
  }
};

/**
 * Generate a JWT token
 * @param {Object} payload - Data to encode into the token
 * @param {string} [expiresIn] - Expiration time (default: 1h)
 * @returns {string} Signed JWT token
 */
export const generateToken = (payload, expiresIn = '1h') => {
  try {
    return jwt.sign(payload, process.env.JWT, { expiresIn });
  } catch (e) {
    console.error('Error generating token:', e);
    throw e;
  }
};

/**
 * Verify a JWT token
 * @param {string} token - JWT token to verify
 * @returns {Object|null} Decoded payload if valid, otherwise null
 */
export const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT);
  } catch (e) {
    console.error('Error verifying token:', e);
    return null;
  }
};
