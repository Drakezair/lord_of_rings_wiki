type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  type,
  placeholder,
  onChange,
  className,
  id,
  required,
  ...props
}: InputProps): JSX.Element {
  return (
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className={`bg-primary text-quinary mt-3 font-semibold py-2 px-4 rounded-md ${className}`}
      {...props}
    />
  );
}

/*
Open/Close Principle

The open/closed principle states that a software module should be open for extension but closed for modification.
In this example, the Input component is open for extension but closed for modification.
Exposing the onChange prop allows the Input component to be extended to handle different types of input events.
Is not necessary to modify the Input component to handle different types of input events or even add styles.

*/
