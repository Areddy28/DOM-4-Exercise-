"use strict"; 


document.querySelector("form").addEventListener("submit", function(event){
    console.log("hello");
//prevent default submit to stop refresh. 
    event.preventDefault(); 

// get form data
    let data = new FormData(document.querySelector("form"))
    let number = Number(data.get("coins")) 
    let coins = data.get("coin")

// print the data
    console.log(coins);
    console.log(number); 
    
    for (let i = 0; i < number; i++) {
        
      
        let coin = document.createElement("div")
        coin.classList.add("coin")
        coin.innerText = `${coins}`
        document.body.append(coin)

        
    }
    
    for (let i = 0; i < number; i++)  {
        document.querySelector("section").innerHTML += ` <div class = "coin ${coins}"></div>`;
    }
})

document.querySelector("body").addEventListener("click", (event) => {
    if(event.target.localName === "div" && event.target.parentElement.classList.contains("parentElement")) {
        event.target.remove();
    }
})


//Misc. Notes 
// document.querySelector(".dime").innerHTML += `<div class=" ${number}">
//     <div class ="${number} Label"><p>${number}</p></div> 
//     </div> 
// document.querySelector("#coin").addEventListener("submit", function(){
//         console.log("anything")

//<div class = "coin">
// Dime        
// </div>

//short cut variable name 
// let form = document.querySelector("form"); 

// other ways to form a fx:
//Arrow Function example:
//document.querySelector("form").addEventListener("submit", (event) => {
//    event.preventDefault()
//}
// add coin to html within JS
//document.querySelector("section").innerHTML += ` <div class = "coin"></div>`;