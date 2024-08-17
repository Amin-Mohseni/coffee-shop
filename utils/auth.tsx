import { hash, compare } from "bcryptjs";
import { sign, verify, JwtPayload } from "jsonwebtoken";

// Hash کردن رمز عبور
const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

// بررسی درستی رمز عبور با رمز عبور هش شده
const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

// تولید توکن دسترسی (Access Token)
const generateAccessToken = (data: object): string => {
  const token = sign({ ...data }, "asioughf289tyq09834yt809ajsf", {
    expiresIn: "60s",
  });
  return token;
};

// بررسی صحت توکن دسترسی (Access Token)
const verifyAccessToken = (token: string): JwtPayload | string | false => {
  try {
    const TokenPayload = verify(token, "asioughf289tyq09834yt809ajsf");
    return TokenPayload;
  } catch (err) {
    console.error("Verify Access Token Error =>", err);
    return false;
  }
};

// تولید توکن ریفرش (Refresh Token)
const generateRefreshToken = (data: object): string => {
  const token = sign({ ...data }, "ksjnguo3q4yt9872htouwoiusfa", {
    expiresIn: "15d",
  });
  return token;
};

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
};
