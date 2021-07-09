const json2Array = (json) => {
  let newArray = [];
  for (const element in json) {
    newArray.push({ id: element, ...json[element] });
  }
  return newArray;
};

export default json2Array;
