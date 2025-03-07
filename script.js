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


function displayAttribute() {
const img = document.querySelector("img");
const imageLink = img. getAttribute("src");
const p = document.querySelector ('p');
p. innerText = imageLink;
img.setAttribute("src",
"https://www.topgear.com/sites/default/files/images/news-article/2021/06/514af9cc9cb2e64c58703910ef39e443/p90424815_highres_maisach-ger-2nd-june.jpg");
}

function turnBold() {
const el = document.getElementById("turnX");
el.setAttribute("class", "bold");
}

function turnItalic() {
const el = document.getElementById("turnX");
el.setAttribute("class", "italic");
}

function displayAttribute() {
 const img = document.querySelector("img")
const imgLink = img.getAttribute("src")
const p =
document.getElementById("displayHere");
p.innerHTML = imgLink;
}

function toggleUnderline(){
 const el = document.getElementById("turnX");
 el.classList.toggle("underline");
}

function addClass(){
 const el =
document.getElementById("turnX");
 el.classList.addElement("red-text")
}

// Notes

// document.querySelector() is a flexible way to select the first matching element using any CSS selector.

// document.getElementById() is the fastest way to select an element directly by its unique id.

// document.getElementsByTagName() selects all elements with a given tag name and returns an HTMLCollection.

// document.querySelectorAll() selects all matching elements using any CSS selector and returns a NodeList.