import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("đã vào authorize", credentials);
        const db = await connectToDatabase();

        const client = await db
          .collection("users")
          .findOne({ email: credentials?.username });

        if (!client) {
          throw new Error("no user found");
        }
        const isValid = await verifyPassword(
          credentials?.password as string,
          client?.password as string
        );
        if (!isValid) {
          throw new Error("password wrong");
        }

        // Return null if user data could not be retrieved

        return client.email;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
