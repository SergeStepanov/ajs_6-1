/* eslint-disable guard-for-in, linebreak-style, no-console */
// const obj = {
//   name: 'мечник',
//   health: 10,
//   level: 2,
//   attack: 80,
//   defence: 40,
// };

export default function orderByProps(object, paramSort) {
  const sortingOrderOfProperties = [];
  const otherProperties = [];

  for (const key in object) {
    const newObject = {};
    newObject.key = key;
    newObject.value = object[key];
    const ind = paramSort.indexOf(key);
    if (ind > -1) {
      sortingOrderOfProperties[ind] = newObject;
    } else {
      otherProperties.push(newObject);
    }
  }

  return [
    ...sortingOrderOfProperties,
    ...otherProperties.sort((a, b) => ((a.key.toLowerCase() > b.key.toLowerCase()) ? 1 : -1)),
  ];
}

// console.log(orderByProps(obj, ['name', 'level']));
