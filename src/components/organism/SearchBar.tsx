"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Input, Select } from "../atom";
import { useDebouncedCallback } from "use-debounce";
import { races } from "@/lib/races";
import { defaultLimit, limitOptions } from "@/lib/const";

type SearchProps = {} & React.InputHTMLAttributes<HTMLInputElement>;
export default function SearchBar({ ...props }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const limit = searchParams.get("limit") || defaultLimit;
  const page =
    searchParams.get("name")?.toString().replace("/", "").replace("/i", "") ||
    "";
  const race = searchParams.get("race") || "";

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const param = new URLSearchParams(searchParams);
      if (e.target.value) {
        param.set("name", `/${e.target.value}/i`);
        param.set("page", "1");
      } else {
        param.delete("name");
        param.delete("page");
      }

      replace(`${pathname}?${param.toString()}`);
    },
    1000
  );

  const handleFilter = (
    e: React.FormEvent<HTMLSelectElement> &
      React.ChangeEvent<HTMLSelectElement>,
    filter: "limit" | "race"
  ) => {
    const value = e.target.value;
    const param = new URLSearchParams(searchParams);
    console.log(e.target.value);
    if (value) {
      param.set(filter, value);
      param.set("page", "1");
    } else {
      param.delete(filter);
      param.delete("page");
    }

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
      <Input
        onChange={handleSearch}
        defaultValue={page}
        {...props}
        className="mx-0 sm:col-span-3"
      />
      <Select
        onChange={(
          e: React.FormEvent<HTMLSelectElement> &
            React.ChangeEvent<HTMLSelectElement>
        ) => handleFilter(e, "race")}
        defaultValue={race}
        placeholder={"No Filter"}
        options={races}
        className="mx-0 sm:col-span-1"
      />
      <Select
        defaultValue={limit}
        onChange={(
          e: React.FormEvent<HTMLSelectElement> &
            React.ChangeEvent<HTMLSelectElement>
        ) => handleFilter(e, "limit")}
        placeholder={"10 per page"}
        options={limitOptions}
        className="mx-0 sm:col-span-1"
      />
    </div>
  );
}


/*

Observer Patterns

The observer pattern is a software design pattern in which an object, 
called the subject, maintains a list of its dependents, 
called observers, and notifies them of any state changes, 
usually by calling one of their methods. 
It is mainly used to implement distributed event handling systems, 
in "event driven" software. 

In this example, the UrlSearchParams object is used to observe changes in the URL.
The SearchBar component uses the observer pattern to observe changes in the URL.
When the URL changes, the SearchBar component updates the search bar and filter values accordingly.
This allows difference component to react to changes in the URL and update the UI accordingly.

*/