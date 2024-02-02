"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function validateSession() {
  const value = cookies().get("auth")?.value;
  if (value) {
    return true;
  }
  return false;
}

export async function signInAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { user, password } = Object.fromEntries(formData);
  if (user === "smeagol" && password === "gollum") {
    cookies().set("auth", "smeagol");
    redirect("/wiki/characters");
  } else {
    return { message: "Invalid credentials" };
  }
}
