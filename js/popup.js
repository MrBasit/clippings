import {popupData} from "./popup-data.js";


var body = document.querySelector("body");
var blurSection = document.querySelector("#blur-section");
var boxContent = document.querySelectorAll(".box-cont");
const btnClose = document.querySelector(".btn-close");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup img");
const popupHeading = document.querySelector(".popup-container h2");
const popupDiscription= document.querySelector(".popup-container p");

boxContent.forEach(element => {
    element.addEventListener('click', function(){
        body.classList.add('scroll-disable')
        blurSection.classList.add('back')
        // popup.classList.add('active')
        popup.style.display = 'block';
        let index = Array.from(boxContent.keys()).find(i => boxContent[i] == element);

        let data  =  popupData[index];

        popupImage.src = data.img;
        popupHeading.innerHTML = data.title;
        popupDiscription.innerHTML = data.discription;



    })
})


btnClose.addEventListener('click', function(){
    popup.style.display = 'none';
    body.classList.remove('scroll-disable')
    blurSection.classList.remove('back')
})


