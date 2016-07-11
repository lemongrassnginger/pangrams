var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

function setUserName () {
	var sName = prompt('Please enter your name.');
	localStorage.setItem('name', sName); //persist name using localStorage API
	myHeading.textContent = "Hello " + sName + "!";
}

var oButton = document.querySelector('button');
oButton.onclick = function() {
	setUserName();
}
