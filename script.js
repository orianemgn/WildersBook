console.log("Hello World!")

//Section 3 - Wilders - Code for the modal 
//Get the element in the cards div
let cards = document.getElementsByClassName("cards-container");
console.log("CARDS", cards)

//get all button in array id to use it later to get the button how open the modal 
let buttonId = [];
let modalBoxId = [];

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i].children[1].id ,cards[i].children[2].id)
  //(cards[i].children[1].id.innerHTML).push(buttonId); 
  buttonId.push(cards[i].children[1].id);
  modalBoxId.push(cards[i].children[2].id);
}

//console.log("Buttonid", buttonId)
//console.log("ModalboxId", modalBoxId)

// Get the modal 
//let modal = document.getElementById("modal-box")
//console.log(modal.innerHTML); 


//Get the button that opens the modal
//let btn = document.getElementById("modal-button"); 


//Get the span id
let modelContent = document.getElementsByClassName("modal-content"); 
let spanId = []; 
for (let i = 0; i < modelContent.length; i++) { 
  spanId.push(modelContent[i].children[0].id);
}

//Get the span element that closes the modal 
//let span1 = document.getElementsByClassName("close")[1];
//console.log("SPAN", span1)

let btn; 
let modal; 
let span; 
for (let i = 0; i < buttonId.length; i++) {
  //get the button that opens the modal
  let btn = document.getElementById(buttonId[i]); 
  // the the modal
  let modal = document.getElementById(modalBoxId[i]);
  //console.log("Modal", modal.innerHTML)

  let span = document.getElementById(spanId[i]);
  console.log("SPANID", span)

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display="block"; 
    console.log(modal)
  }

  //When the user clicks on span (x), close the modal
  console.log(span)
  span.onclick = function(){
    modal.style.display = "none"; 
    
  }; 

  //When the user clicks anywhere outsite the modal, close interface
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}; 

  
}







// When the user clicks on the button, open the modal
//btn.onclick = function(){
//    modal.style.display="block"; 
//}; 

//When the user clicks on span (x), close the modal
//span.onclick = function(){
//    modal.style.display = "none"; 
//}; 

//When the user clicks anywhere outsite the modal, close interface
// window.onclick = function(event) {
    // if (event.target == modal) {
      // modal.style.display = "none";
    // }
  // }; 


//Section 4 - Contact
let inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  console.log(inputs[i]);
  inputs[i].addEventListener(
    'input',
    function () {
      getValue(inputs[i]);
    },
    false
  );
}

const getValue = ele => {
  let attr = ele.getAttribute('id');
  let value = ele.value;
  console.log(value);
  switch (attr) {
    case 'name':
      checkValdity(value);
      handleValue(value);
      break;
    case 'email':
      handleValue(value);
      break;
    case 'telephone':
      handleValue(value);
      break;
    default:
      console.log('not here');
  }
};

const handleValue = val => {
  console.log(val);
};

const checkValdity = value => {
  let smallLetters = value.toLowerCase();
  console.log('++++++>>>>>', smallLetters);
  let regex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  let found = regex.test(smallLetters);
  console.log('========>>>>', found);
};


// console.log("Hello World!")
// let hello = 'hello';
// let helloo = {};
// console.log(hello);
// console.log(document);
// console.log(window);

// let hey = () => {
//   console.log(hello);
// };
// hey();

console.log("Hello World!")


