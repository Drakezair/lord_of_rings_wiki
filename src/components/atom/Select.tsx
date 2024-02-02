"use client";

type SelectProps = {
  options: string[];
  placeholder?: string;
} & React.HTMLAttributes<HTMLSelectElement>;

export default function Select({
  options = [],
  placeholder,
  className,
  ...props
}: SelectProps) {
  return (
    <select
      className={`bg-primary text-quinary mx-2 h-10 mt-3 font-semibold py-2 px-4 rounded-md ${className}`}
      {...props}
    >
      <option value="">{placeholder}</option>
      {!!options.length &&
        options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
    </select>
  );
}
