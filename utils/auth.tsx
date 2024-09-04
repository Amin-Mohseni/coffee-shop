import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data: object) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey as string, {
    expiresIn: "1d",
  });
  return token;
};

const verifyAccessToken = (token: string) => {
  try {
    const tokenPayload = verify(
      token,
      process.env.AccessTokenSecretKey as string
    );
    return tokenPayload;
  } catch (error) {
    console.log("Verify Access Token Error ->", error);
    return false;
  }
};

const generateRefreshToken = (data: object) => {
  const token = sign({ ...data }, process.env.RefreshTokenSecretKey as string, {
    expiresIn: "15d",
  });
  return token;
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^09\d{9}$/;
  return phoneRegex.test(phone);
};

const validatePassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return passwordRegex.test(password);
};

const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
  return usernameRegex.test(username);
};

const validateCompany = (company: string): boolean => {
  const companyRegex = /^[a-zA-Z0-9]{3,16}$/;
  return companyRegex.test(company);
};

const validateMessage = (message: string): boolean => {
  const messageRegex = /^.{10,500}$/;
  return messageRegex.test(message);
};

export {
  validateMessage,
  validateCompany,
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateUsername,
};
