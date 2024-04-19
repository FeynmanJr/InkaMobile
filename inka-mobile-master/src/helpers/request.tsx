import { Pagination } from "types/pagination";

export const defaultPagination = {
  pageIndex: 0,
  pageSize: 10,
};

export const buildQueryString = (pagination: Pagination) => {
  let queryString = "";

  if (pagination.pageIndex !== undefined && pagination.pageIndex !== null) {
    queryString = build(queryString, "pageIndex", pagination.pageIndex);
  }

  if (pagination.pageSize !== undefined && pagination.pageSize !== null) {
    queryString = build(queryString, "pageSize", pagination.pageSize);
  }

  return queryString;
};

const build = (queryString: string, key: string, value: any) => {
  queryString += `${
    queryString.indexOf("?") === -1
      ? "?"
      : `${queryString.includes("=") ? "&" : ""}`
  }${key}=${value}`;

  return queryString;
};
