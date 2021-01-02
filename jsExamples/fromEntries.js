// объект prices сначала преобразуем в массив, применяем к нему map и преобразуем его обратно в объект doublePrices

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  let doublePrices = Object.fromEntries(
      Object.entries(prices)
      .map(([key, value]) => [key, value * 2])
  );

console.log(doublePrices);


