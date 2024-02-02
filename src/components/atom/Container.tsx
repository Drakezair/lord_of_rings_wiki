type ContainerProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div data-testid="container" className="max-w-7xl mx-auto px-4">
      {children}
    </div>
  );
}
