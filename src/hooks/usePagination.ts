import { useMemo } from "react";

export function usePagination(totalPages: number) {
  const pages = (useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages
  }, [totalPages]))

  return [pages]
}