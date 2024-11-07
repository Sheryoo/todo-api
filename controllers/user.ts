import crypto from "crypto";
import { Response } from "express";
import User from "../models/user";
import jwt, { Secret } from "jsonwebtoken";
import { config } from "dotenv";
import { emailRegex, passwordRegex } from "../utils/regex";

config();

export const userRegister = async (req: any, res: Response) => {
  const { fullName, email, password } = req.body;
  const salt = crypto.randomBytes(16).toString("hex");

  if (!passwordRegex.test(password)) {
    return res.status(400).send({
      status: false,
      message:
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      data: null,
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).send({
      status: false,
      message: "Invalid email address",
      data: null,
    });
  }

  crypto.pbkdf2(
    password,
    salt,
    310000,
    32,
    "sha256",
    async (err, hashedPassword) => {
      if (err) {
        return res.status(500).send({
          status: false,
          message: "Something went wrong",
          data: null,
        });
      }
      try {
        if (await User.findOne({ where: { email: email } })) {
          return res.status(400).send({
            status: false,
            message: "User already exists",
            data: null,
          });
        }
        const user = await User.create({
          fullName: fullName,
          email: email,
          password: hashedPassword,
          salt: salt,
        }).catch((error) => {
          return res
            .status(500)
            .send({ status: false, message: error?.message, data: null });
        });

        const id = new Date().getDate();

        const token = jwt?.sign(
          { id, email, fullName },
          process?.env?.JWT_SECRET as Secret,
          {
            expiresIn: "30d",
          },
        );

        return res.status(200).send({
          status: true,
          message: "User created successfully",
          data: { token, user },
        });
      } catch (error: any) {
        return res.status(500).send({
          status: false,
          message: error?.message,
          data: null,
        });
      }
    },
  );
};

export const userLogin = async (req: any, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: any = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res
        .status(404)
        .send({ status: false, message: "User not found", data: null });
    }

    crypto.pbkdf2(
      password,
      user.salt,
      310000,
      32,
      "sha256",
      async (err, hashedPassword: any) => {
        if (err) {
          return res
            .status(500)
            .send({ status: false, message: err, data: null });
        }

        if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
          return res.status(401).send({
            status: false,
            message: "Incorrect Password",
            data: null,
          });
        }
        const id = new Date().getDate();

        const token = jwt.sign(
          { id, email, fullName: user.fullName },
          process.env.JWT_SECRET as Secret,
          {
            expiresIn: "30d",
          },
        );
        const response = {
          email: user.email,
          fullName: user.fullName,
          token: token,
        };

        return res.status(200).send({
          status: true,
          message: "Logged in successfully",
          data: response,
        });
      },
    );
  } catch (error) {
    return res.status(500).send({ status: false, message: error, data: null });
  }
};
