const getTravelById = (travels, id) => {
    return travels.find((it) => it.id === id) ?? null;
  };
  
  export { getTravelById };