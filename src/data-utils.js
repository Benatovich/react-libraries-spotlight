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

export function genderCountByCarAge(arr) {
  const countTotalObject = arr.reduce((acc, curr) => {
    if (acc[curr.gender]) {
      acc[curr.gender].count++;
      acc[curr.gender].total = acc[curr.gender].total + curr.car_model_year;
    } else {
      acc[curr.gender] = {};
      acc[curr.gender].count = 1;
      acc[curr.gender].total = curr.car_model_year;
    }
    
    return acc;
  }, {});

  return Object.entries(countTotalObject)
    .map(entry => ({
      gender: entry[0],
      averageCarYear: entry[1].total / entry[1].count,
      averageCarAge: 2022 - (entry[1].total / entry[1].count),
    }));
}

// export function getTotalOfEachGender(data) {
//   const countingHashMap = {};

//   for (let customer of data) {
//     countingHashMap[customer.gender]
//       ? countingHashMap[customer.gender]++
//       : countingHashMap[customer.gender] = 1;
//   }
//   return countingHashMap;
// }