import { books } from "../data/books";

export const useBooks = () => {
  return {
    books,
  };
};

export const useBook = (id: number) => {
  return books.find((q) => q.id === id);
};
