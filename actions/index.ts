"use server"
import prisma from "@/lib/db";

interface signupTypes {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: signupTypes) => {
  try {
    await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
