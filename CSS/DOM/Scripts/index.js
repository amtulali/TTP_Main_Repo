// console.log("hello its connecting")

// const element = document.
// getElementById("MyElement");
// // console.log(element);
// element.textContent="New Text Added";
// const paragraph = document.
// getElementById("paragraph");
// // paragraph.innerHTML= "<Strong>NewContents</strong>";

// // //Example 3
// let property = document.getElementById("property");
// property.style.backgroundColor ="blue";
// property.style.fontSize="3rem";
// property.style.textAlign="center";

// let elements = document.getElementsByClassName("myClass");
// console.log(elements);
// console.log(elements.length);
// elements[1].style.border="2px solid red";

// const myClass2= document.getElementsByClassName=("myClass2");
// console.log(myClass2);
// myClass2[0].textContent="Modified Text";
// myClass2[0].classList.add("newClass");

// const myClass3= document.getElementsByClassName=("myClass3");
// myClass3[0].classlist.remove("myClass3");

// const button = document.getElementsByClassName("toggle-button");
// function toggleClass(){
//     for(let i=0; i<button.length; i++){
//         button[i].classList.toggle("active");
//     }
// }
// toggleClass();





// const element=documment.querySelector("div");
// console.log(element);
// element.textContent="new Text";


// const element2 = document.querySelector("#myElement");
// element2.style.backgroundColor="pink";

// const element3 = document.querySelector(".myClass");
// element3.style.fontSize="100px"

// const image =document.querySelector(".myImg");
// image.setAttribute("href", "/scripts/")

// fuction getValue(){
//     const input = document.querySelectorAll("myLink");
//     const value = input.value;
//     console.log(value);
// }
//  function highLightItems(){
//     const listItems =document.querySelectorAll("#myList li")
//     listItems.forEach(function(item)){
//         item.style.backgroundColor="yellow";
//     }
//  }

//  highLightItems();

//  function disableButtons(){
//     const buttons = document.querySelectorAll(".container button")
//     console.log(buttons);
//     buttons.forEach(function(b){
//         b.disabled = true;
//     });

//     //Example 3
//     let randomNum = Math.trunc(Math.random()*6)+1;
    
//     function changeMsg(text){
//         document.querySelector(".par").textContent=text;
//     }

//     function check(){
//         let inputFrontUser = Number(document.querySelector(".numInput").value);

//     }
//  if(!inputFrontUser){
//     changeMsg("Please enter a valid number");
//  }

//  // Example 1
// let newElement = document.createElement("p"); // creates an empty paragraph element
// console.log(newElement); // <p></p>
// newElement.textContent = "I just created this"

// document.body.appendChild(newElement); // adds this newElement we created to our body tag using appendChild().
// // check your 'inspect' in your browser. you should now see an empty paragph element in your body element

// // Example 2
// const div = document.createElement('div'); // creating empty div element
// div.classList.add('box'); // adding a CSS class that we defined in our CSS file named "box" to this div element
// document.getElementById('container').appendChild(div); // first we get the 'container' id element using getElementById(). Then, we add our "div" variable that stores a 'div' element to our 'container' id 'div'
// // Inspect your browser page. The 'container' div should now have a 'div' element child with a 'box' class

// // Example 3
// const container = document.getElementById('container2');
// const paragraph = container.querySelector('p');
// container.removeChild(paragraph); // removes the 'paragraph' variable that stores the 'p' element, which we got from our 'container2' id, and removes that element from the `container` parent
// // we can no longer see the "Text to be removed" text or that paragraph element in our html code (using inspect)

// // Example 4
// function createAndAppendImage() {
//     const container = document.getElementById("container3");
//     const image = document.createElement("img");
//     image.src = "image.jpg";
//     container.appendChild(image);
// }

// // Example 5
// function removeMultipleChildElements() {
//     const container = document.getElementById("container4");
//     const paragraphs = container.querySelectorAll("p");
//     paragraphs.forEach(paragraph => {
//         // remove multiple child elments
//         container.removeChild(paragraph);
//     });
// }
// removeMultipleChildElements();

//  function cloneAndAppendElement() {
//     const container = document.getElementById("container");
//     const originalParagraph = container.querySelector("p");

//     // cloneNode(true/false) - must call the cloneNode() function on an element you want to copy and pass in true (to clone) that specific element. In this case, we are cloning the 'paragraph' element inside of the 'container' div element.
//     const clonedParagraph = originalParagraph.cloneNode(true);
//     container.appendChild(clonedParagraph);
// }
// cloneAndAppendElement(); // you should now see two copies of the same paragraph element

// // Example 2
// function cloneAndModifyElement() {
//     const container = document.getElementById("container2");
//     const originalList = container.querySelector("ul");
//     console.log(originalList);
//     const clonedList = originalList.cloneNode(true); // clones to entire 'ul' element in 'container2' (which inclues the li element inside of it)
//     const listItem = clonedList.querySelector("li");  // selecting the 'li' element in the cloned 'ul' element.
//     listItem.textContent = "Modified item"; // change text of the 'li' element selected
//     container.appendChild(clonedList); // add element to the 'container2' div
// }
// cloneAndModifyElement();

// Example 3
// function cloneAndReplaceElement() {
//     const container = document.getElementById("container3");
//     const originalParagraph = container.querySelector("p");
//     const clonedParagraph = originalParagraph.cloneNode(true);
//     clonedParagraph.textContent += "/ cloned and replaced"

//     // replaceChild() - accepts two parameters. The first parameter is what you want to input. The second parameter is what you want to replace that is currently in your HTML code (using the first parameter)
//     container.replaceChild(clonedParagraph, originalParagraph);
// }
// cloneAndReplaceElement();
//  }



//DAY 2



//setting up our first event listener:

// const button = document.getElementById("click-me");

// button.addEventListener('click', () => {
//     console.log('Button clicked');
// })

// const countButton = document.getElementById('count-me');
// let clickCount=0;

// countButton.addEventListener('click', () =>{
//     clickCount++;
//     console.log('This button has been clicked')
// })

// const hover =document.getElementById('hover-me');

// hover.addEventListener('mouseover')

// const hoverCount = document.getElementById('hover-count');
// let hoverCounter = 0;

// hoverCount.addEventListener('mouseover', (){
//     hoverCounter++;
//     console.log('we moved the mouse over this element ${hoverCounter} times')
// });

// hoverCount.addEventListener('mouseout', () => {
//     console.log('I just pressed the ${event.key} key!')
// });

// Document.addEventListener('keyup', () => {
//    v }
//     let string = '';

//     document.addEventListener('keydown', {event} => {
//     string += event.key;
//     console.log(string);
// });

// //for submission

// const form = document.getElementById('form');
// let submitCount =0;

// form.addEventListener('submit', )
// //setTimeout and setInterval

// function hello(){
//     console.log("hello world");
// }

// setTimeout(hello, 1000);

// setInterval(hello, 2000);

// const textElement = document.getElementById('myText');
// const textButton = document.getElementById('changeText');
// textButton.addEventListener('click', () =>{
//     setTimeout{( =>{
//         textElement.textContent = 'Text Changed!!';
//     }, 2000);
// }
// })

// const divElement = document.getElementById('myDiv');
// let colors = ['red', 'purple', 'blue'];
// let count =0;

// setInterval(() =>{
//     divElement.style.backgroundColor
// })

// function getValue(){
//     const input = document.querySelector("#myInput");
//     const value = input.value;
//     console.log(value);
// }

// let randomNum = Math.trunc(Math.random()*6)+1;
// console.log(randomNum)
    
//     function changeMsg(text){
//         document.querySelector(".par").textContent=text;
//     }

//     function check(){
//         let value = Number(document.querySelector(".numInput").value);
    
//  if(value){
//     changeMsg("Please enter a valid number");
//  }

//  if(value==randomNum){
//     changeMsg("You win!!");
//     document.querySelector("body").style.backgroundColor="green";
//  }
// else{
//     changeMsg("Try again! Wrong number");
// }
//     }
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess} `;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } else if (guessCount === 5) {
      lastResult.textContent = "!!!GAME OVER!!!";
      lowOrHi.textContent = "";
      setGameOver();
    } else {
      lastResult.textContent = "Wrong!";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
      }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
  }

  guessSubmit.addEventListener("click", checkGuess);
  
 