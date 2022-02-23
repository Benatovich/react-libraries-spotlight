export function generateColumns(arr) {
  const keys = Object.keys(arr[0]);

  const columns = keys.map(key => {
    return {
      key: key,
      name: key.split('_')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join('')
    };
  });
  return columns;
}

export function makeCountByAge(arr) {
  const countTotalObject = arr.reduce((acc, curr) => {
    if (acc[curr.car_make]) {
      acc[curr.car_make].count++;
      acc[curr.car_make].total = acc[curr.car_make].total + curr.age;
    } else {
      acc[curr.car_make] = {};
      acc[curr.car_make].count = 1;
      acc[curr.car_make].total = curr.age;
    }

    return acc;
  }, {});

  return Object.entries(countTotalObject)
    .map(entry => ({
      make: entry[0],
      averageAge: entry[1].total / entry[1].count,
    }));
}