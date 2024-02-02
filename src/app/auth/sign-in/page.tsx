"use client";
import { signInAction } from "@/actions/auth";
import { Button, Input, Title, Text } from "@/components/atom";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-3" disabled={pending}>
      {pending ? "Loading" : "Sign In"}
    </Button>
  );
}

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
        <SubmitButton />
      </form>
    </div>
  );
}
