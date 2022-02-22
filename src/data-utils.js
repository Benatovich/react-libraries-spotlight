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
    if (acc[curr.department]) {
      acc[curr.department].count++;
      acc[curr.department].total = acc[curr.department].total + curr.age;
    } else {
      acc[curr.department] = {};
      acc[curr.department].count = 1;
      acc[curr.department].total = curr.age;
    }

    return acc;
  }, {});

  return Object.entries(countTotalObject)
    .map(entry => ({
      make: entry[0],
      averageAge: entry[1].total / entry[1].count,
    }));
}