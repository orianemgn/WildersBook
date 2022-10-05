// console.log("Hello World!")

//Exemple adpte un chat 
// const cards = document.querySelector(".cards");

// const animalsToAdopt = [
//   {
//     name: "Lucky",
//     picture: "https://placekitten.com/200/287"
//   },
//   {
//     name: "Symba",
//     picture: "https://placekitten.com/200/139"
//   },
//   {
//     name: "Léo",
//     picture: "https://placekitten.com/200/90"
//   },
//   {
//     name: "Milo",
//     picture: "https://placekitten.com/200/194"
//   },
//   {
//     name: "Charly",
//     picture: "https://placekitten.com/200/179"
//   }
// ];

// function createCard(title, imageUrl) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   cards.appendChild(card);

//   const cardHeader = document.createElement("div");
//   cardHeader.classList.add("card-header");
//   card.appendChild(cardHeader);

//   const cardImg = document.createElement("div");
//   cardImg.style.backgroundImage = `url(${imageUrl})`;
//   cardImg.classList.add("card-img");
//   cardHeader.appendChild(cardImg);

//   // Step1: Create the cardBody div, add the class card-body and add it to the card
//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");
//   card.appendChild(cardBody);
//   // Step2: Create the cardTitle h2, add the class card-title,
//   // set the text inside the tag to the "title" parameter of this function
//   // and add it to the cardBody
//   const cardTitle = document.createElement("h2");
//   cardTitle.classList.add("card-title");
//   cardTitle.innerHTML = title;
//   cardBody.appendChild(cardTitle);

//   // Step3: Create the cardButton button, add the class card-button,
//   // set the text inside the tag to be "Adopt Now"
//   // and add it to the cardBody
//   const cardButton = document.createElement("button");
//   cardButton.classList.add("card-button");
//   cardButton.innerHTML = "Adopt Now";
//   cardBody.appendChild(cardButton);
// }

// /* Step 4: Create a for loop, for each element of the array, 
//  call the function createCard with the corresponding parameter */
// for (let i = 0; i < animalsToAdopt.length; i++) {
//   createCard(animalsToAdopt[i].name, animalsToAdopt[i].picture);
// }

//Section 3 Wilders - code to display the wilders 
let wildersGroup1 = [
  {
    id: 6, 
    name: "Andrei", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture:  "/assests/7848.jpg", 
    linkedin: "https://www.linkedin.com/", 
    gitHub: "https://github.com/AndreiLhu" 
  },
  {
    id: 7, 
    name: "Ahmed", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "/assests/7848.jpg", 
    linkedin: "https://www.linkedin.com/", 
    gitHub: "https://github.com/elbehary01" 
  },
  {
    id: 8, 
    name: "Goerg", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "/assests/7848.jpg", 
    linkedin: "https://www.linkedin.com/", 
    gitHub: "https://github.com/GeorgBerlin" 
  },
  {
    id: 9,
    name: "Oriane", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "/assests/7848.jpg", 
    linkedin: "https://www.linkedin.com/in/magninoriane/", 
    gitHub: "https://github.com/orianemgn" 
  },
]; 

//Get the container where have to be the wilders 
const container =  document.querySelector(".container");
console.log("CONTAINER", container);

//Function to create the cards in container 
function createCards(id, name, description, picture, linkedin, github) {
  // Step 1: The card
  //create the div with class cards inside container
  const cards = document.createElement("div");
  cards.classList.add("cards");
  container.appendChild(cards);

  //create the image with class cards-image inside div cards
  const cardImg = document.createElement("img");
  cardImg.classList.add("cards-image");
  cardImg.src = picture; 
  cardImg.alt = "profil image"
  cards.appendChild(cardImg);

  //create div cards-container inside cards div
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container"); 
  cards.appendChild(cardsContainer);

  //create h5 name inside cards-container div
  const cardTitle = document.createElement("h5");
  cardTitle.innerHTML = name; 
  cardsContainer.appendChild(cardTitle);
  
  //create button to Open the Modal with id 
  const cardButton = document.createElement("button"); 
  cardButton.innerHTML = "more";
  cardButton.setAttribute("id", `modal-button${id}`); 
  cardsContainer.appendChild(cardButton);

  //Step 2: the Modal
  // create modal-box inside cardsContainer with id
  const modalBox = document.createElement("div");
  modalBox.classList.add("modal"); 
  modalBox.setAttribute("id", `modal-box${id}`); 
  cardsContainer.appendChild(modalBox);
  
  //create the modal content inside the modal box
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content"); 
  modalBox.appendChild(modalContent); 

  //create span to close the modal 
  const modalSpan = document.createElement("span"); 
  modalSpan.classList.add("close"); 
  modalSpan.innerHTML = "&times;"; 
  modalSpan.setAttribute("id", `close${id}`); 
  modalContent.appendChild(modalSpan); 

  //create div modal container inside modal content 
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  modalContent.appendChild(modalContainer);

  //create div modal-header inside modal-container 
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalContainer.appendChild(modalHeader);

  //create div modal-header-items-1 inside modal-header
  const modalHeaderItems1 = document.createElement("div");
  modalHeaderItems1.classList.add("modal-header-items-1"); 
  modalHeader.appendChild(modalHeaderItems1);

  //create image inside modal-header-items-1
  const modalImg = document.createElement("img"); 
  modalImg.classList.add("modal-header-image"); 
  modalImg.src = picture; 
  modalImg.alt = "profil image"
  modalHeaderItems1.appendChild(modalImg);

  //create div modal-header-items-2 inside modal-header
  const modalHeaderItems2 = document.createElement("div");
  modalHeaderItems2.classList.add("modal-header-items-2"); 
  modalHeader.appendChild(modalHeaderItems2);

  //create div 1 inside modal-header-items-2
  const modalDivTitle = document.createElement("div");
  modalHeaderItems2.appendChild(modalDivTitle);

  //create h4 title inside div header title 
  const modalTitle = document.createElement("h4"); 
  modalTitle.innerHTML = name; 
  modalDivTitle.appendChild(modalTitle);

  //create div 2 modal-header-items-2 
  const modalDivLinks = document.createElement("div");
  modalHeaderItems2.appendChild(modalDivLinks);

  //create links inside div 2
  const modalLinkGitHub = document.createElement("a"); 
  modalLinkGitHub.href = github; 
  modalLinkGitHub.target = "_blank"; 
  modalLinkGitHub.alt = "GitHub";  
  modalDivLinks.appendChild(modalLinkGitHub);

  const modalLinkLinkedIn = document.createElement("a"); 
  modalLinkLinkedIn.href = linkedin; 
  modalLinkLinkedIn.target = "_blank"; 
  modalLinkLinkedIn.alt = "LinkedIn";  
  modalDivLinks.appendChild(modalLinkLinkedIn);

  //create icons inside the links 
  const modalIconGitHub = document.createElement("img");
  modalIconGitHub.src = "assests/icons8-github.svg"
  modalIconGitHub.alt = "gitHub"; 
  modalIconGitHub.style = "width: 20px"; 
  modalLinkGitHub.appendChild(modalIconGitHub);

  const modalIconLinkedIn = document.createElement("img");
  modalIconLinkedIn.src = "assests/icons8-linkedin.svg"
  modalIconLinkedIn.alt = "LinkedIn"; 
  modalIconLinkedIn.style = "width: 20px"; 
  modalLinkLinkedIn.appendChild(modalIconLinkedIn);

  //Create div modal-body inside modal container 
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalContainer.appendChild(modalBody);

  //create p description inside modal-body
  const modalDescription = document.createElement("p"); 
  modalDescription.innerHTML = description; 
  modalBody.appendChild(modalDescription);


}


//Create a for loop, for each element of the array, 
//call the function createCard with the corresponding parameter */
for (let i = 0; i < wildersGroup1.length; i++) {
  createCards(wildersGroup1[i].id, wildersGroup1[i].name, wildersGroup1[i].description, wildersGroup1[i].picture, wildersGroup1[i].linkedin, wildersGroup1[i].gitHub);
}


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



