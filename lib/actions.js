"use server";

import bcrypt from "bcryptjs";

import { signIn, signOut } from "../app/auth";
import connectToDB from "./db";

const { Post, User } = require("./models");

// find post by id post
const getPost = async (id) => {
  try {
    await connectToDB();
    const res = await Post.findById(id);

    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get post by id post!!!");
  }
};

// find user by id user
const getUser = async (id) => {
  try {
    await connectToDB();
    const res = await User.findById(id);

    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get user by id user!!!");
  }
};

// user registration
const registerUser = async (prev, formData) => {
  const { username, password, email, confirmPassword, image } =
    Object?.fromEntries(formData);

  if (password !== confirmPassword) return { error: "Password do not match!" };

  try {
    await connectToDB();

    const user = await User.findOne({ username: username });

    if (user)
      return {
        error: "User already existed!",
      };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// user login
const loginUser = async (prev, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username: username, password: password });
  } catch (err) {
    console.log("[err] ->", err);

    if (err?.type?.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

// user login with github
const loginUserWithGithub = async () => {
  const type = "github";

  await signIn(type);
};

// user logout
const logoutUser = async () => {
  await signOut();
};

export {
  getPost,
  getUser,
  registerUser,
  loginUserWithGithub,
  loginUser,
  logoutUser,
};
