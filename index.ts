declare var require: any

// Import stylesheets
import './style.css';

var fs = require("faker");

interface Person {
  firstName: string;
  lastName:  string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// Doc = http://marak.github.io/faker.js/
var user = {
	firstName: fs.name.firstName(),
  lastName: fs.name.lastName(),
  email : fs.internet.email()
};

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1>' + greeter(user) + '</h1>';
appDiv.innerHTML += '<ul>'
appDiv.innerHTML += '    <li><span class="prop">Avatar : </span> <img src="' + fs.image.avatar() + '"/img></li>'
appDiv.innerHTML += '    <li><span class="prop">Email : </span>' + user.email + '</li>'
appDiv.innerHTML += '    <li><span class="prop">Country : </span>' + fs.address.country() + '</li>'
appDiv.innerHTML += '</ul>'
