const array2json = (array) => {
  const newObj = {};
  for (element of array) {
    newObj[element.id] = { ...element };
    delete newObj[element.id].id;
  }
  return newObj;
};

export default array2json;
