import { Merriweather, Poppins } from "next/font/google";

type TextProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  font?: "merriweather" | "poppins";
}> &
  React.HTMLAttributes<HTMLParagraphElement>;

const merriweather = Merriweather({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", '800'] });

const fonts = {
  merriweather,
  poppins,
};

export default function Text({
  children,
  className,
  font = "merriweather",
}: TextProps): JSX.Element {
  return (
    <p className={`text-quinary  ${fonts[font].className} ${className}`}>
      {children}
    </p>
  );
}
