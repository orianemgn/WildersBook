console.log("Hello World!")



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
