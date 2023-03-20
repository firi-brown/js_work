// let elem = document.body.childNodes[3];
// console.log(elem);

let accessDiv = document.body.childNodes[1];
console.log(accessDiv);
let accessUl = document.body.childNodes[3];
    console.log(accessUl);
// let accessLi = document.body.childNodes[3].childNodes[1];
// console.log(accessLi);
let getList = document.getElementsByTagName("li");
console.log(getList);
getList[0].style.fontSize = "30px";
let parentElem = document.querySelector("div > p");
console.log(parentElem);
parentElem.style.color = "red";

let header = document.createElement("h1");
header.innerText = "my name is chi chi hahaha";
document.body.appendChild(header);

let but = document.createElement("button");
but.innerText = "See more";
document.body.appendChild(but);
but.style.color = "green";
but.style.backgroundColor = "yellow";