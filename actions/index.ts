"use server";
import prisma from "@/lib/db";

interface signupTypes {
  name: string;
  email: string;
  password: string;
}

export const signUp = async ({ email, password, name }: signupTypes) => {
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
