import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        console.log("đã vào authorize", credentials);
        const db = await connectToDatabase();

        const client = await db
          .collection("users")
          .findOne({ email: credentials?.email });

        console.log({ client });

        if (!client) {
          throw new Error("no user found");
        }
        const isValid = await verifyPassword(
          credentials?.password as string,
          client?.password as string
        );

        console.log({ isValid });
        if (!isValid) {
          throw new Error("password wrong");
        }

        // Return null if user data could not be retrieved
        const data = {
          email: client.email,
          name: "dsuong",
        };

        return data;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  pages: {
    signIn: "/auth",
  },
  session: {
    strategy: "jwt",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
