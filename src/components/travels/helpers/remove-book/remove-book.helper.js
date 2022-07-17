const removeBook = (books, book) => {
    return books.filter((it) => it.id !== book.id);
  };
  
  export { removeBook };