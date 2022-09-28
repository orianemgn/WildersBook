console.log("Hello World!")

//Section 3 - Wilders - Code for the modal 
// Get the modal 
let modal = document.getElementById("modal-box"); 
console.log(modal.innerHTML); 

//Get the button that opens the modal
let btn = document.getElementById("modal-button"); 

//Get the span element that closes the modal 
let span = document.getElementsByClassName("close")[0];
console.log("SPAN", span)


// When the user clicks on the button, open the modal
btn.onclick = function(){
    modal.style.display="block"; 
}; 

//When the user clicks on span (x), close the modal
span.onclick = function(){
    modal.style.display = "none"; 
}; 

//When the user clicks anywhere outsite the modal, close interface
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }; 