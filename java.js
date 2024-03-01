// queryselector 

const title =document.querySelector("");
title.style.color = "yellow";
console.log(title);

// Creating element 
const ul=document.querySelector("ul");
const li=document.querySelector("li");
// adding element
ul.append(li)
// modifying the element
li.innerText='x-men'
// modifing the attributes and classes
li.setAttribute("id", 'main-heading');
// remove
li.remove('id')
// getting attribute for main-heaing
const title = document.querySelector('main-heading');
console.log(title.getAttribute('id'));
// how to do with classes with add method
li.classList.add('list-iems')
// removing list items
li.classList.remove('list-items')

// to check if the element have that specific class
console.log(li.classList.contains('list-items'));
// removing elements
li.remove();

// dom tree
// parent mode traversal

// let uls=document.querySelector("ul")
// console.log(uls.parentNode);
// console.log(ul.parentElement);
// // checking for great grand parents
// console.log(uls.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// child mode traversal
let uls=document.querySelector("ul")
// console.log(uls.childNodes);
// // checking the first and last child
// console.log(uls.firstChild);
// console.log(ul.lastChild);
// // selecting the first child
// ul.childNodes[1].style.backgroundColor = 'blue';

console.log(ul.children);
// first child and second chld
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);


// sibling node traversal
let ups=doucument.querySelector('ul');
const div = document.querySelector('div');
console.log(div.childNodes);
console.log(ul.previousSibling);
console.log(ul.nextSibling);


// event listeners
// element.addeventlistener("click", function);
// taking a class or id
const buttonTwo = document.querySelector('.btn-2');
// taking a call back function
function alertBtn(){
    alert('i also love javascript');
};
buttonTwo.addEventListener("click", alertBtn)

// mouseOver event
const newBackgroundColor = document.querySelector('.btn-3');
function changeBgColor(){
    newBackgroundColor.style.newBackgroundColor = 'blue';
};
newBackgroundColor.addEventListener('mouseover', changeBgColor)
// Reveal Event class
const revealBtn =document.querySelector('reveal-btn');
const hiddenContent = document.querySelector('hidden-content');
function revealcontent(){
   if(hiddenContent.classList.contains('reveal-btn')){
    hiddenContent.classList.remove('reveal-btn')
   }else{
    hiddenContent.classList.add('reveal-btn')
   }
}
revealBtn.addEventListener('click', revealBtn);

