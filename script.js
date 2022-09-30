// console.log("Hello World!")

//Section 3 - Wilders - Code for the modal
//Get the element in the cards div
let cards = document.getElementsByClassName('cards-container');
// console.log('CARDS', cards);


//get all button in array id to use it later to get the button how open the modal

let buttonId = [];
let modalBoxId = [];

for (let i = 0; i < cards.length; i++) {
  // console.log(cards[i].children[1].id, cards[i].children[2].id);
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
let modelContent = document.getElementsByClassName('modal-content');
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
  // console.log('SPANID', span);

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
    // console.log(modal);
  };

  //When the user clicks on span (x), close the modal
  // console.log(span);
  span.onclick = function () {
    modal.style.display = 'none';
  };

  //When the user clicks anywhere outsite the modal, close interface
  //NOT WORKING ANYMORE FOR THE MOMENT
  window.addEventListener('click', function (event) {
    // console.log('Event', event.target, 'modal', modal);

//Get all the span id
let modelContent = document.getElementsByClassName("modal-content"); 
let spanId = []; 
for (let i = 0; i < modelContent.length; i++) { 
  spanId.push(modelContent[i].children[0].id);
}

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
    window.addEventListener("click", function(event) {
    console.log("Event", event.target, "modal", modal);

    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}
//End section 3

//Section 4 - Contact
let inputs = document.querySelectorAll('input');
let button = document.getElementsByClassName('submit');
console.log(button);

// button.addEventListener('click', function () {
//   console.log(doSomeMagic(inputs));
// });

function doSomeMagic(inputsEle) {
  for (let i = 0; i < inputsEle.length; i++) {
    // console.log(inputs[i]);
    inputsEle[i].addEventListener(
      'input',
      function () {
        onSubmit(inputsEle[i]);
      },
      false
    );
  }
}

const onSubmit = ele => {
  console.log(ele);
  let attr = ele.getAttribute('id');
  let value = ele.value;
  // console.log(value);
  switch (attr) {
    case 'name':
      checkValdity(attr, value);
      if (checkValdity(attr, value)) {
        setData(attr, value);
      } else {
      }
      break;
    case 'email':
      checkValdity(attr, value);
      if (checkValdity(value)) {
        setData(attr, value);
      } else {
      }
      break;
    case 'telephone':
      checkValdity(attr, value);
      if (checkValdity(attr, value)) {
        setData(attr, value);
      } else {
      }
      break;
    default:
      console.log('not here');
  }
};

const checkValdity = (id, value) => {
  console.log('=========>>>>>>>>', id, value);
  // let smallLetters = value.toLowerCase();
  let nameRegex = /^(?=.{2,25}$)[a-zA-Z]+(?: [a-zA-Z]+)?$/;
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let teleRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (id === 'name') {
    let firstName = value.split(' ').slice(0, -1).join(' ');
    let lastName = value.split(' ').slice(-1).join(' ');
    let fullName = `${firstName} ${lastName}`;
    return nameRegex.test(fullName);
  } else if (id === 'email') {
    return emailRegex.test(value);
  } else if (id === 'telephone') {
    return teleRegex.test(value);
  } else {
    return false;
  }
};

const setData = (id, val) => {
  console.log('HAHAHAHAH', id, val);
  let messageData = {};
  console.log((messageData[id] = val));
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

// console.log('Hello World!');
