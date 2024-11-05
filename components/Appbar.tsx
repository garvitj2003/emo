"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();
  return (
    <div className="">
      <button
        onClick={() => {
          signIn();
        }}
      >
        signin
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        logout
      </button>
      {JSON.stringify(session)}
    </div>
  );
};
