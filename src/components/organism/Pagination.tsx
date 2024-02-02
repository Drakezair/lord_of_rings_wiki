/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type PaginationProps = {
  totalPages: number;
};
const RANGE_PAGE = 5;
const RANGE_LABELS = 2;

export default function Pagination({ totalPages }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage: number = Number(searchParams.get("page")) || 1;

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const rangePages = (start: number, end: number) => {
    if (start <= 0) {
      start = 1;
      end = RANGE_PAGE;
    }
    if (end > totalPages) {
      end = totalPages;
      start = totalPages - RANGE_PAGE;
    }
    if (totalPages < RANGE_PAGE) {
      start = 1;
      end = totalPages;
    }
    const rawRangePages = range(start, end).map((i) => {
      const param = new URLSearchParams(searchParams);
      param.set("page", i.toString());
      return { url: `${pathname}?${param.toString()}`, number: i };
    });

    return rawRangePages;
  };

  const pages = useMemo(
    () => rangePages(currentPage - RANGE_LABELS, currentPage + RANGE_LABELS),
    [currentPage, totalPages]
  );

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <Link
            href={`${pathname}?page=1`}
            className="cursor-pointer hover:bg-tertiary relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-quaternary transition-all duration-300 "
          >
            First
          </Link>
        </li>
        {pages.map((page, i) => (
          <li key={i}>
            <Link
              href={page.url}
              className={`mx-2 cursor-pointer hover:bg-tertiary relative block rounded-full  px-3 py-1.5 text-sm text-quaternary transition-all duration-300 ${
                page.number == currentPage ? "bg-primary" : "bg-transparent"
              }`}
            >
              {page.number}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`${pathname}?page=${totalPages}`}
            className="cursor-pointer hover:bg-tertiary  relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-quaternary transition-all duration-300  "
          >
            last
          </Link>
        </li>
      </ul>
    </nav>
  );
}
