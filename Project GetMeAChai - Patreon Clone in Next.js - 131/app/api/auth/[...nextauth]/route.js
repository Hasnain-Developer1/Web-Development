import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import mongoose from "mongoose";

import connectDb from '@/db/connectDb';
import User from '@/models/User';
import Payment from '@/models/Payment';


export const authoptions = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github") {
        await connectDb();
        const currentUser = await User.findOne({ email: user.email });

        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email?.split("@")[0] || user.name?.replace(/\s+/g, "").toLowerCase() || "githubuser",
            name: user.name,
            profilepic: user.image,
          });
        }
      }

      return true;
    },

    async session({ session }) {
      if (!session?.user?.email) return session;

      await connectDb();
      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.name = dbUser.username || dbUser.name || session.user.name;
        session.user.image = dbUser.profilepic || session.user.image;
      }

      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});

export { authoptions as GET, authoptions as POST }