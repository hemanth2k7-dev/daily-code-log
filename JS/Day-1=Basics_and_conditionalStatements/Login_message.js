/*let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} Rewrite if..else using multiple ternary operators '?'*/
let message;
login="";
message=(login=="Employee")?"Hello":
(login=="Director")?"Greetings":
(login=="")?"No Login":"";
console.log(message);