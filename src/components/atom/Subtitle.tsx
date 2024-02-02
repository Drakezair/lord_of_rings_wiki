import { Merriweather } from "next/font/google";

type SubtitleProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });

export default function SubTitle({
  children,
  className,
}: SubtitleProps): JSX.Element {
  return (
    <h2 className={`text-quinary  ${merriweather.className} ${className}`}>
      {children}
    </h2>
  );
}
