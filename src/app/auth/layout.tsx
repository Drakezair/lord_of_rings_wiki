import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Middle Earth - Rings of Power",
  description: "Sign in to your account to access the magical universe of Middle Earth.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center">
      <div className="p-8 rounded-md bg-quaternary">{children}</div>
    </div>
  );
}
