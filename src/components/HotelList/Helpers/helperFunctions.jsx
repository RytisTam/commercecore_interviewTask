export const createPageNumbers = (currentPage, nPages) => {
  const pageArray = [-3, -2, -1, 0, 1, 2, 3]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= nPages);
  pageArray.splice(5, pageArray.length);

  if (pageArray[0] > 1) {
    pageArray.splice(4, pageArray.length);
    pageArray.unshift("...");
  }

  if (pageArray[pageArray.length - 1] < nPages) {
    pageArray.push("...");
  }

  return pageArray;
};
