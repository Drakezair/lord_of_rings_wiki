import Link from "next/link";

type NavButtonProps = Readonly<{
  href: string;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
}>;

export default function NavButton({
  href,
  text,
  icon,
  className,
}: NavButtonProps) {
  return (
    <Link href={href}>
      <button
        className={`bg-transparent hover:bg-tertiary font-light text-sm text-white hover:font-bold py-2 px-4 rounded ${className}`}
      >
        {text} {icon}
      </button>
    </Link>
  );
}
