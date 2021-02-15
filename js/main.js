// prevent default
document.querySelector('body').addEventListener('click', preventDflt);
 function preventDflt(e){
   var tElment = e.target.getAttribute('href');
   var tElmentP = e.target.parentElement.getAttribute('href');
   if(tElment == '#' || tElmentP == '#'){
     e.preventDefault();
    }
  }
// ================================================//

const btnClose = document.getElementById('close-popup');
const btnOkay = document.getElementById('okay-btn');
const popup = document.getElementById('contact-popup');
const mail = document.getElementById('contact-email');

mail.addEventListener('submit', popupFunc);
btnClose.addEventListener('click', popupFunc);
btnOkay.addEventListener('click', popupFunc);


function popupFunc(e){
  popup.classList.toggle('active');
 
  e.preventDefault();
}