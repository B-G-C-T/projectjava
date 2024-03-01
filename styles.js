// dom document object model: dom
// use to manipulate the subject and object or structure
// dom manipulation
// get element by id
 const titile =document.getElementById("main-heading");
 console.log(titile);
//  get by cclass name
const listitem = document.getElementsByClassName("list-item");
console.log(listitem);
// queryselector is used to grab all the element by taking the 
// container of the html element
// queryselector
const btn = document.querySelector("div")
// when we have multiple div element we use the 
// queryselectorall
const btns = document.querySelectorAll("div");
console.log(btns);

// stling an element
const title = document.querySelector('main-heading');
title.style.color = 'red';

// applying the font size of all the listiteam by looping through
const listitems = document.querySelectorAll('list-items');
for(i = 0; i < listitem.length; i++){
    listitem.style.fontSize = '2rem';
}

// creating element
const ul = document.querySelector('ul');
const li = document.createElement("li");
// adding element
ul.append(li)
// modifying the text
li.innerText = "x-men"
// const firsListItem = document.querySelector('.list-item');
// console.log(firsListItem.innerText);
// setAttributes require 2 values ,
// the id and the name you wish to give
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');
// classes
li.classList.add('list-item');
li.remove();

// parent mode 
let uls = document.querySelector('ul');
console.log(uls.parentNode);
console.log(uls.parentElement)

// child node traversal
let ull = document.querySelector('ul');
console.log(ul.childNodes);
// get all the child element under the ul
// like the list iem etc.
// making use of the node to style th first index number
ul.childNodes[1].style.backgroundColor = 'blue';

// event listeners
// element.addEventListener("click", function);
const butttonTwo = document.querySelector('btn-2');
function alertBtn(){
alert('heelo');
};
butttonTwo.addEventListener("click", alertBtn )

// mouse over
const newBack = document.querySelector("ox-3");
function changeBtn(){
    newBack.style.backgroundColor = ' blue';
}
newBack.addEventListener("mouseover", changeBtn);

// 