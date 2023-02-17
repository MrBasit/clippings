import {popupData} from "./popup-data.js";


var boxContent = document.querySelectorAll(".box-cont");
const close = document.querySelector(".fa-times-circle");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup img");
const popupHeading = document.querySelector(".popup-container h2");
const popupDiscription= document.querySelector(".popup-container p");

boxContent.forEach(element => {
    element.addEventListener('click', function(){
        popup.style.display = 'block';
        let index = Array.from(boxContent.keys()).find(i => boxContent[i] == element);

        let data  =  popupData[index];

        popupImage.src = data.img;
        popupHeading.innerHTML = data.title;
        popupDiscription.innerHTML = data.discription;



    })
})


close.addEventListener('click', function(){
    popup.style.display = 'none';
})


