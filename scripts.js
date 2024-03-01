// // const { createSearchParams } = require("react-router-dom");

// //  const Search = document.getElementById("search")
// //  console.log(Search);
// //  Search.addEventListener("click", function create(e){
// //     // when ever we click display hello java
    
    
// //     const searchElement = document.createElement("P");
// //     // creating an html file is by using th rtun
// //     searchElement.innerText = "hello"

    

// //     // Search.appendChild(searchElement);
// //     // console.log(searchElement)
// //     const searchEngine = document.createElement("input")

// //     console.log(searchEngine)

// //     const buttonEngine = document.createElement('button')
// //     buttonEngine.innerText= "hello button"
// //     console.log(buttonEngine)
// //     Search.append(buttonEngine)

// //     createSearchParams



// //  })
// //  function what to happen
// // create a function


// // append 

// // the background color
// const btn = document.getElementById("ensures");
// function changeBgColor(){
//    btn.style.backgroundColor = "black";
//    btn.style.backgroundImage = "none"

// };
// btn.addEventListener("click", changeBgColor)

// // button
// const search = document.getElementById("searchs");
// const searchOne = document.querySelector("#mainHeader");
// const searchTwo = document.getElementById("submit");
// const close = document.getElementById("close");


// // function revealContent(){
// //    if(searchOne.style.contains("searchs")){
// //       searchOne.style.remove("searchs")
// //    }else{
// //       searchOne.style.add("searchs")
// //    }
// // }
// // search.addEventListener("click", revealContent)

// // function displays(){
// //    if(searchOne){
// //       searchOne.document.style.display = "hello"
// //    }else{
      
// //    }
// // }
// // search.addEventListener("click", displays)
// const emma = document.getElementById("emma");
// const shop = document.getElementById("shop");

// emma.addEventListener('click', shop);










// close.addEventListener("click", (e)=>{
//    e.preventDefault();
//    searchOne.style.display= "none";
//    document.querySelector("#mainHeader").style.display = "flex";
//    search.style.display = "block";
// });


const search = document.getElementById("searchs");
const mainHeader = document.getElementById("mainHeader");
const linkDiv = document.getElementById("link");

search.addEventListener("click", ()=>{
   if(search){
      mainHeader.style.display = "block";
      search.style.display = "none";
      linkDiv.style.display = "none";
   };
})

