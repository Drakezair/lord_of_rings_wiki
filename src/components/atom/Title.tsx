import { Poppins } from "next/font/google";

type TitleProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });

export default function Title({
  children,
  className,
}: TitleProps): JSX.Element {
  return (
    <h1 className={`text-quinary  ${poppins.className} ${className}`}>
      {children}
    </h1>
  );
}
