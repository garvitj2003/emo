import prisma from "@/lib/db";
import NextAuth from "next-auth";
import Credentialsprovider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentialsprovider({
      name: "Login here",
      credentials: {
        username: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "123456",
        },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.username,
            password: credentials.password,
          },
        });
        if (user) {
          return {
            id: user.id.toString(),
            email: user.email,
          };
        }
        {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
export { handler as GET, handler as POST };
