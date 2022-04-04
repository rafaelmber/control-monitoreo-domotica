const hashCreator = (keyName, elementList) => {
  const idList = [];
  let value = 0;

  if (elementList.length !== 0) {
    elementList.forEach((element) => {
      idList.push(parseInt(element.id.split('_')[1]));
    });
    for (let num = 1; num <= elementList.length; num++) {
      if (
        idList.some((ele) => {
          return ele === num;
        })
      ) {
        continue;
      } else {
        value = num;
        break;
      }
    }
  }

  return `${keyName}_${value}`;
};

export default hashCreator;
