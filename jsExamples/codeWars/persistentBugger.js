function persistence(num) {
    
    let numOfTimes = 0;
    let arr = Array.from(num.toString());
    let mulPersist = arr.reduce((mul, current) => mul * current, 1);
    
    if (arr.length === 1) {
        return 0;
    }
    else { 
        ++numOfTimes;
        numOfTimes += persistence(mulPersist);
        return numOfTimes;
    }
}
console.log(persistence(999));
/* Функция перемножает цифры числа, затем перемножает цифры в получившемся числе,
затем в следующем и т. д. пока не останется число из одной цифры. Возвращает
количство перемножений, пока не дойдет до одной цифры. Сделано рекурсией специально. */