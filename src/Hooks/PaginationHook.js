import { useEffect, useState } from "react";

function usePagination(totalPost) {
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    window.onscroll = (ev) => {
      console.log(
        "con1",
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      );
      console.log("con2", pageCount < Math.ceil(totalPost / 5));
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        pageCount < Math.ceil(totalPost / 5)
      ) {
        setPageCount(pageCount + 1);
      }
    };
  }, []);
  return [pageCount];
}

export default usePagination;
