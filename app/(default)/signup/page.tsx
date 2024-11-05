"use client";
import { signUp } from "@/actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface inputTypes {
  name: string;
  email: string;
  password: string;
}
export default () => {
  const router = useRouter();
  const [input, setInput] = useState<inputTypes>({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp({ email: input.email, password: input.password, name: input.name });
    router.push("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          required
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="email"
          required
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
