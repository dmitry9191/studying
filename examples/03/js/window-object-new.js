var msg = '<h2>окно браузера</h2><p>ширина: ' + window.innerWidth + '</p>';
msg += '<p>высота: ' + window.innerHeight + '</p>';
msg += '<h2>история</h2><p>элементов: ' + window.history.length + '</p>';
msg += '<h2>экран</h2><p>ширина: ' + window.screen.width  + '</p>';
msg += '<p>высота: ' + window.screen.height + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;
alert('Текущая страница: ' + window.location);


