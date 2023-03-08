import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * Encrypts a password with salt.
 * @param {string} password User password to hash
 * @returns Encrypted password.
 */
const encryptPassword = async function (password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

 /**
 * Matches input password and user's password.
 * @param {string} password Input password to match
 * @returns If passwords match or not, true or false.
 */
const matchPassword = async function (password: string, encryptedPassw: string) {
    return await bcrypt.compare(password, encryptedPassw)
}

const generateToken = function (user: any) {
    const u = {
        id: user.id,
        username: user.username,
        password: user.password
    };

      // .env should contain a line like JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#
      return jwt.sign(u, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
      });
}

export { encryptPassword, matchPassword, generateToken };