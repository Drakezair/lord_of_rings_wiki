import Link from "next/link";

type ButtonProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  link?: string;
  type?: "button" | "submit" | "reset";
}> &
  React.HTMLProps<HTMLButtonElement>;

export default function Button({
  children,
  className,
  onClick,
  type,
  link,
  ...props
}: ButtonProps): JSX.Element {
  if (link)
    return (
      <Link href={link}>
        <button
          className={`bg-tertiary text-quinary font-semibold py-2 px-4 rounded-md ${className}`}
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-tertiary text-quinary font-semibold py-2 px-4 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
