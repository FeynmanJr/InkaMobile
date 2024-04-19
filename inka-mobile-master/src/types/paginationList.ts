export type PaginationList<T> = {
  count: number | null;
  hasNext: boolean | null;
  hasPrevious: boolean | null;
  index: number | null;
  pages: number | null;
  size: number | null;
  items: T[];
};
