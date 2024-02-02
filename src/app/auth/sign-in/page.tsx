"use client";
import { signInAction } from "@/actions/auth";
import { Button, Input, Title, Text } from "@/components/atom";
import { useFormState } from "react-dom";

export default function Page() {
  const [state, formAction] = useFormState(signInAction, { message: "" });

  return (
    <div className="flex justify-center items-center flex-col">
      <Title className="text-secondary">Sign In</Title>
      <form
        action={formAction}
        className="flex justify-center items-center flex-col"
      >
        <Input required id="user" type="text" placeholder="User" />
        <Input required id="password" type="password" placeholder="Password" />
        <Text className="text-red-600 mt-3">{state?.message}</Text>
        <Button type="submit" className="mt-3">
          Sign In
        </Button>
      </form>
    </div>
  );
}
