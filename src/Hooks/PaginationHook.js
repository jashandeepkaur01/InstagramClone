import { useEffect, useState } from "react";

function usePagination() {
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPageCount((prev) => prev + 1);
      }
    };
  }, []);
  return [pageCount, setPageCount];
}

export default usePagination;
