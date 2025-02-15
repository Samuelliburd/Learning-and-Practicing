function itemCount () {
	const itemCount =
document.getElementsByTagName("li");
	const span =
document.querySelector("span");
span.innerText = itemCount.length
}

itemCount()

function onOrOff() {
	const onOrOff =
document.querySelector(".onOrOff");
	onOrOff.innerHTML = "On"
}

function offOrOn() {
	const onOrOff =
document.querySelector(".onOrOff");
	onOrOff.innerHTML = "Off"
}

function displayItem(){
	const fruit = document.querySelectorAll(".fruit");
	const numberOfFruits =
document.querySelector("span.numberOfFruits")
	numberOfFruits.innerText = fruit.length;
}

function register() {
	const paragraph =
document.querySelector("#paragraph");
	const username =
document.getElementById("usernameInput").value;
	paragraph.innerHTML = "You username is " + username;
}

document.getElementById("title").innerHTML = "Learning and Practicing";


// Notes

// document.querySelector() is a flexible way to select the first matching element using any CSS selector.

// document.getElementById() is the fastest way to select an element directly by its unique id.

// document.getElementsByTagName() selects all elements with a given tag name and returns an HTMLCollection.

// document.querySelectorAll() selects all matching elements using any CSS selector and returns a NodeList.