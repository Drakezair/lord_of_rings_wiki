type CardGridProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
export default function CardGrid({
  children,
  onClick,
  className,
  ...props
}: CardGridProps) {
  return (
    <div
      {...props}
      onClick={onClick}
      className={`flex items-center flex-col p-4 bg-primary rounded-lg shadow-md text-center relative ${className}`}
    >
      {children}
    </div>
  );
}
