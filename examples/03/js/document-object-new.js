var msg = '<p><b>заголовок страницы: </b>' + document.title + '<br>';
msg += '<b>адрес страницы: </b>' + document.URL + '<br>';
msg += '<b>дата изменения: </b>' + document.lastModified + '</p>';
var el = document.getElementById('footer');
el.innerHTML = msg;

