import NextAuth from "next-auth";
import { authOptions } from "t3-dependencies/server/auth";

export default NextAuth(authOptions);
