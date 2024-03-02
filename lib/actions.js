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

export { getPost, getUser };
