console.log("Hello World!")

//Section 3 - Wilders - Code for the modal
// Get the modal
let modal = document.getElementById('modal-box');

//Get the button that opens the modal
let btn = document.getElementById('modal-button');

//Get the span element that closes the modal
let span = document.getElementsByClassName('close')[0];
console.log('SPAN', span);

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

//When the user clicks on span (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

//When the user clicks anywhere outsite the modal, close interface
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};


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

console.log('Hello World!');
