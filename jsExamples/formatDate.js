function formatDate(date) {
    let diff = new Date() - date;
    let dateArray = [
        '0' + date.getDate(),
        '0' + (date.getMonth() + 1),
        '' + date.getFullYear(),
        '0' + date.getHours(),
        '0' + date.getMinutes()
    ];
    
    if (diff < 1000) {
        return 'right now';
    } else if (diff < 1000 * 60) {
        let n = Math.floor(diff / 1000);
        return `${n} seconds ago`;
    } else if (diff < 1000 * 3600) {
        let m = Math.floor(diff / 1000/ 60);
        return `${m} minutes ago`;
    } else {
        let formattedArray = dateArray.map((component) => component.slice(-2));
        return formattedArray.slice(0, 3).join('.') + ' ' + formattedArray.slice(3).join(':');
    }
}

console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
