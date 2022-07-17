const getTodoById = (travels, id) => {
    return travels.find((it) => it.id === id) ?? null;
  };
  
  export { getTodoById };