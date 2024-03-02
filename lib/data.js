const { default: connectToDB } = require("./db");
const { User, Post } = require("./models");

const fetchUsers = async () => {
  try {
    await connectToDB();
    const res = await User.find();

    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!!!");
  }
};

const fetchPosts = async () => {
  try {
    await connectToDB();
    const res = await Post.find();

    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!!!");
  }
};

export { fetchUsers, fetchPosts };
