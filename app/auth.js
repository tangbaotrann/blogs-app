import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import connectToDB from "../lib/db";
import { User } from "../lib/models";
import { authConfig } from "@/app/auth.config";

// Google account
const login = async (credentials) => {
  try {
    await connectToDB();

    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("Wrong credentials!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials!");
    }

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth((req) => {
  if (req) {
    console.log(req); // do something with the request
  }

  return {
    ...authConfig,
    providers: [
      // Github account
      GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // Google account
      CredentialsProvider({
        async authorize(credentials) {
          try {
            const user = await login(credentials);

            return user;
          } catch (err) {
            return null;
          }
        },
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        if (account.provider === "github") {
          try {
            await connectToDB();

            const user = await User.findOne({ email: profile.email });

            if (!user) {
              const newUser = new User({
                username: profile.login,
                email: profile.email,
                image: profile.avatar_url,
              });

              await newUser.save();
            }
          } catch (err) {
            console.log(err);
            return false;
          }
        }

        return true;
      },
      ...authConfig.callbacks,
    },
  };
});
