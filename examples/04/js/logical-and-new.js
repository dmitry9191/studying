var score1 = 8; //first stage points
var score2 = 8; //second stege points
var pass1 = 6; //pass points for first stage
var pass2 = 6; //pass points for second stage

//check result in the variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);

//create the message
var msg = 'Оба этапа пройдены: ' + passBoth;

//show the message
var el = document.getElementById('answer');
el.textContent = msg;

